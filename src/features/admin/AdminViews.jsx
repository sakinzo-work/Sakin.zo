import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useAdmin } from "./AdminContext.jsx";
import { contactDefaults, labels, sortRecords } from "./config.js";
import { Field, humanLabel } from "./ResourceEditor.jsx";
import { mediaUrl, safeUrl } from "../../lib/api.js";
import { uploadMedia } from "./api.js";
export function useAction() {
  const [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const run = async (action) => {
    setBusy(true);
    setError("");
    try {
      await action();
    } catch (failure) {
      setError(failure.message);
    } finally {
      setBusy(false);
    }
  };
  return { busy, error, run };
}
export function Avatar({ user, className = "profile-avatar" }) {
  return user.profileImage ? (
    <img
      className={className}
      src={mediaUrl(user.profileImage)}
      alt={user.name || ""}
    />
  ) : (
    <span className={className}>
      {(user.name || "?")
        .split(" ")
        .map((value) => value[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()}
    </span>
  );
}
export function ConfirmDialog() {
  const { confirmation, setConfirmation } = useAdmin(),
    [note, setNote] = useState("");
  useEffect(() => setNote(""), [confirmation]);
  if (!confirmation) return null;
  const close = (accepted) => {
    confirmation.resolve(accepted ? { note } : null);
    setConfirmation(null);
  };
  return createPortal(
    <div
      className="modal open"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      onKeyDown={(event) => {
        if (event.key === "Escape") close(false);
      }}
    >
      <div className="modal-card" style={{ maxWidth: 480 }}>
        <h2 id="confirm-title">{confirmation.title || "Confirm action"}</h2>
        <p style={{ margin: "16px 0" }}>{confirmation.message}</p>
        {confirmation.note && (
          <label className="field">
            Review note
            <textarea
              autoFocus
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />
          </label>
        )}
        <div className="row" style={{ justifyContent: "flex-end" }}>
          <button
            type="button"
            className="btn secondary"
            onClick={() => close(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            autoFocus={!confirmation.note}
            className="btn primary"
            onClick={() => close(true)}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
export function Dashboard() {
  const { data, user, setEditing, canView } = useAdmin(),
    [range, setRange] = useState("7D");
  const categories = [
      "projects",
      "insights",
      "clients",
      "team",
      "testimonials",
    ],
    total = categories.reduce((sum, key) => sum + data[key].length, 0);
  const days = { "7D": 7, "30D": 30, "3M": 90, "1Y": 365 }[range];
  const records = categories.flatMap((key) => data[key]),
    bins = Array.from({ length: 7 }, (_, index) => {
      const start = Date.now() - (((7 - index) * days) / 7) * 86400000,
        end = Date.now() - (((6 - index) * days) / 7) * 86400000;
      return records.filter((row) => {
        const time = new Date(row.createdAt || 0).getTime();
        return time >= start && time < end;
      }).length;
    });
  const max = Math.max(1, ...bins),
    points = bins
      .map((value, index) => `${30 + index * 95},${170 - (value / max) * 130}`)
      .join(" ");
  return (
    <div className="dashboard-shell">
      <div className="dash-hero">
        <div>
          <h1 className="dash-title">
            Welcome back, {(user.name || "Sakin").split(" ")[0]}!
          </h1>
          <p className="dash-kicker">
            Here is what is happening with your platform today.
          </p>
        </div>
        <div className="dash-date">
          {new Date().toLocaleDateString("en", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      </div>
      <div className="dash-metrics">
        {categories.filter(canView).map((key, index) => (
          <div
            className="dash-metric"
            key={key}
            style={{
              "--accent": [
                "#2f7bff",
                "#7c3aed",
                "#14b8a6",
                "#f59e0b",
                "#ec4899",
              ][index],
            }}
          >
            <span className="muted">{labels[key]}</span>
            <strong>{data[key].length}</strong>
            <small>
              {data[key].filter((row) => row.visible !== false).length} visible
            </small>
          </div>
        ))}
      </div>
      <div className="dash-main-grid">
        <section className="dash-panel">
          <div className="dash-panel-head">
            <div>
              <h3>Website Stats</h3>
              <p>Content published over time</p>
            </div>
            <div className="dash-tabs">
              {["7D", "30D", "3M", "1Y"].map((value) => (
                <button
                  type="button"
                  key={value}
                  className={range === value ? "active" : ""}
                  onClick={() => setRange(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <svg
            className="dash-chart"
            viewBox="0 0 640 210"
            role="img"
            aria-label={`${range} content activity`}
          >
            <path
              d="M30 40H610M30 100H610M30 170H610"
              stroke="#64748b33"
              fill="none"
            />
            <polyline
              points={points}
              stroke="#3b82f6"
              strokeWidth="4"
              fill="none"
            />
            {bins.map((value, index) => (
              <circle
                key={index}
                cx={30 + index * 95}
                cy={170 - (value / max) * 130}
                r="5"
                fill="#3b82f6"
              />
            ))}
          </svg>
        </section>
        <section className="dash-panel">
          <div className="dash-panel-head">
            <div>
              <h3>Content Distribution</h3>
              <p>{total} records across categories</p>
            </div>
          </div>
          <div className="dash-legend">
            {categories.map((key, index) => (
              <div key={key}>
                <i
                  style={{
                    background: [
                      "#2f7bff",
                      "#7c3aed",
                      "#14b8a6",
                      "#f59e0b",
                      "#ec4899",
                    ][index],
                  }}
                />
                {labels[key]} <strong>{data[key].length}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="dash-main-grid">
        <section className="dash-panel">
          <h3>Recent projects</h3>
          <div className="dash-list">
            {sortRecords(data.projects)
              .slice(0, 4)
              .map((project) => (
                <div className="dash-list-row" key={project._id}>
                  <strong>{project.title}</strong>
                  <span className="muted">{project.category}</span>
                  <button
                    type="button"
                    className="btn secondary"
                    onClick={() =>
                      setEditing({ type: "projects", item: project })
                    }
                  >
                    Edit
                  </button>
                </div>
              ))}
          </div>
        </section>
        <section className="dash-panel">
          <h3>Quick actions</h3>
          <div className="dash-actions">
            {["projects", "blogs", "clients", "team"]
              .filter(canView)
              .map((key) => (
                <button
                  key={key}
                  className="dash-action"
                  type="button"
                  onClick={() => setEditing({ type: key })}
                >
                  + Add {labels[key]}
                </button>
              ))}
          </div>
          <Link to="/" className="btn primary">
            Preview website ↗
          </Link>
        </section>
      </div>
    </div>
  );
}
export function ResourceList({ type }) {
  const {
      data,
      setData,
      setEditing,
      mutate,
      isOwner,
      ask,
      request,
      approval,
      refresh,
      notify,
    } = useAdmin(),
    action = useAction(),
    [dragged, setDragged] = useState(null);
  const rows = sortRecords(data[type]);
  const remove = async (row) => {
    if (
      await ask({
        title: `Delete ${labels[type]}`,
        message: isOwner
          ? "Delete this record permanently?"
          : "Send this deletion for approval?",
      })
    )
      await mutate(
        type,
        "delete",
        {},
        row._id,
        `Delete ${row.title || row.name || labels[type]}`,
      );
  };
  const reorder = async (from, to) => {
    if (from === to) return;
    const reordered = [...rows],
      moved = reordered.splice(from, 1)[0];
    reordered.splice(to, 0, moved);
    const items = reordered.map((row, index) => ({
      id: row._id,
      order: index,
    }));
    if (isOwner) {
      await request("/projects/reorder", {
        method: "POST",
        body: JSON.stringify({ items }),
      });
      setData((previous) => ({
        ...previous,
        projects: reordered.map((row, index) => ({ ...row, order: index })),
      }));
      notify("Project order saved");
    } else {
      await approval("projects", "reorder", { items }, "", "Project order");
      notify("Approval request sent");
    }
    await refresh(true);
  };
  return (
    <>
      <div className="toolbar">
        <div>
          <h2>{labels[type]}</h2>
          <p className="muted">
            {isOwner
              ? "Add, edit, hide/show and delete records from MongoDB."
              : "Submit changes for admin approval before anything goes live."}
          </p>
        </div>
        <button
          className="btn primary"
          type="button"
          onClick={() => setEditing({ type })}
        >
          + {isOwner ? "Add" : "Request"} {labels[type]}
        </button>
      </div>
      {type === "projects" && (
        <p className="project-sort-note">
          Top 3 projects appear first on the homepage. Drag cards or use the
          arrows to change their order.
        </p>
      )}
      {action.error && (
        <p role="alert" className="form-error">
          {action.error}
        </p>
      )}
      <div
        className={type === "projects" ? "project-sort-grid" : "cards"}
        id={type === "projects" ? "projectSortGrid" : undefined}
      >
        {rows.map((row, index) => {
          const image = row.img || row.logo || row.coverImage || row.image;
          return (
            <article
              key={row._id}
              className={`card${type === "projects" ? " project-sort-card" : ""}`}
              draggable={type === "projects" && !action.busy}
              onDragStart={() => setDragged(index)}
              onDragOver={(event) => {
                if (type === "projects") event.preventDefault();
              }}
              onDrop={(event) => {
                event.preventDefault();
                if (dragged !== null) action.run(() => reorder(dragged, index));
                setDragged(null);
              }}
            >
              <div className="row" style={{ justifyContent: "space-between" }}>
                {type === "projects" && (
                  <span className="pill">Top #{index + 1}</span>
                )}
                <span className={`pill${row.visible !== false ? " on" : ""}`}>
                  {row.visible !== false ? "Visible" : "Hidden"}
                </span>
              </div>
              {image && (
                <img
                  className="thumb"
                  src={mediaUrl(image)}
                  alt={row.title || row.name || ""}
                />
              )}
              <h3>
                {row.title ||
                  row.name ||
                  row.label ||
                  row.value ||
                  labels[type]}
              </h3>
              <p className="muted">
                {row.category ||
                  row.role ||
                  row.desc ||
                  row.text ||
                  row.address ||
                  row.country ||
                  row.email ||
                  row.value ||
                  ""}
              </p>
              {type === "projects" && (
                <div className="row">
                  <Link to={`/projects/${row._id}`} className="btn secondary">
                    View project page
                  </Link>
                  {row.videoUrl && <span className="pill on">Video added</span>}
                </div>
              )}
              {type === "blogs" && (
                <Link
                  to={`/blog?slug=${encodeURIComponent(row.slug || row._id)}`}
                  className="btn secondary"
                >
                  View blog
                </Link>
              )}
              <div className="row" style={{ marginTop: 14 }}>
                <button
                  type="button"
                  className="btn secondary"
                  onClick={() => setEditing({ type, item: row })}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn secondary"
                  disabled={action.busy}
                  onClick={() =>
                    action.run(() =>
                      mutate(
                        type,
                        "update",
                        { visible: row.visible === false },
                        row._id,
                        `${row.visible === false ? "Show" : "Hide"} ${labels[type]}`,
                      ),
                    )
                  }
                >
                  {row.visible !== false ? "Hide" : "Show"}
                </button>
                <button
                  type="button"
                  className="btn danger"
                  disabled={action.busy}
                  onClick={() => action.run(() => remove(row))}
                >
                  Delete
                </button>
                {type === "projects" && (
                  <>
                    <button
                      type="button"
                      className="btn secondary"
                      aria-label={`Move ${row.title} up`}
                      disabled={index === 0 || action.busy}
                      onClick={() =>
                        action.run(() => reorder(index, index - 1))
                      }
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className="btn secondary"
                      aria-label={`Move ${row.title} down`}
                      disabled={index === rows.length - 1 || action.busy}
                      onClick={() =>
                        action.run(() => reorder(index, index + 1))
                      }
                    >
                      ↓
                    </button>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>
      {!rows.length && (
        <div className="empty">No {labels[type]} added yet.</div>
      )}
    </>
  );
}
export function Employees() {
  const { data, user, setEditing, isManager, request, refresh, ask, notify } =
      useAdmin(),
    [query, setQuery] = useState(""),
    action = useAction();
  const rows = data.admins.filter((row) =>
    [
      row.name,
      row.email,
      row.employeeId,
      row.position,
      row.role,
      ...(row.permissions || []),
    ]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  const change = async (row, remove = false) => {
    if (
      !(await ask({
        title: remove ? "Remove employee" : "Change employee access",
        message: remove
          ? "Remove this employee permanently?"
          : `${row.active === false ? "Allow" : "Block"} access for ${row.name}?`,
      }))
    )
      return;
    await request(`/admins/${row._id}`, {
      method: remove ? "DELETE" : "PUT",
      ...(!remove
        ? { body: JSON.stringify({ active: row.active === false }) }
        : {}),
    });
    await refresh(true);
    notify("Employee access updated");
  };
  return (
    <>
      <div className="toolbar">
        <div>
          <h2>Employees</h2>
          <p className="muted">Manage employee profiles and section access.</p>
        </div>
        {isManager && (
          <button
            className="btn primary"
            type="button"
            onClick={() => setEditing({ type: "admins" })}
          >
            + Add Employee
          </button>
        )}
      </div>
      <div className="field">
        <label htmlFor="employeeSearch">Search employee</label>
        <input
          id="employeeSearch"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Name, email, employee ID or role"
        />
      </div>
      {action.error && <p role="alert">{action.error}</p>}
      <div className="cards employee-grid">
        {rows.map((row) => {
          const protectedUser =
            row.email === "alishafaq@gmail.com" ||
            String(row._id) === String(user.id);
          return (
            <article className="card employee-card" key={row._id}>
              <div className="admin-account-card">
                <Avatar user={row} />
                <div>
                  <h3>{row.name}</h3>
                  <p className="muted">{row.position || "Employee"}</p>
                </div>
              </div>
              <p>{row.employeeId || "—"}</p>
              <p className="muted">{row.email}</p>
              <div className="row">
                <span className={`pill${row.active !== false ? " on" : ""}`}>
                  {row.active !== false ? "Access allowed" : "Blocked"}
                </span>
                <span className="pill">{row.role}</span>
              </div>
              <div className="access-pills">
                {(row.permissions || []).map((key) => (
                  <span key={key} className="pill">
                    {labels[key] || key}
                  </span>
                ))}
              </div>
              {isManager && (
                <div className="row">
                  <button
                    className="btn secondary"
                    type="button"
                    onClick={() => setEditing({ type: "admins", item: row })}
                  >
                    Edit
                  </button>
                  {!protectedUser && (
                    <>
                      <button
                        className="btn secondary"
                        type="button"
                        disabled={action.busy}
                        onClick={() => action.run(() => change(row))}
                      >
                        {row.active === false ? "Allow" : "Block"}
                      </button>
                      <button
                        className="btn danger"
                        type="button"
                        disabled={action.busy}
                        onClick={() => action.run(() => change(row, true))}
                      >
                        Kick
                      </button>
                    </>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
      {!rows.length && <div className="empty">No employees found.</div>}
    </>
  );
}
export function Approvals() {
  const { data, user, isOwner, isManager, ask, request, refresh, notify } =
      useAdmin(),
    action = useAction();
  const review = async (row, decision) => {
    const result = await ask({
      title: decision === "approve" ? "Approve request" : "Reject request",
      message: row.title || row.resourceType,
      note: true,
    });
    if (!result) return;
    await request(`/approvals/${row._id}/${decision}`, {
      method: "PUT",
      body: JSON.stringify({ reviewNote: result.note }),
    });
    await refresh(true);
    notify(decision === "approve" ? "Request approved" : "Request rejected");
  };
  return (
    <>
      <div className="toolbar">
        <div>
          <h2>{isManager ? "Approvals" : "My Approvals"}</h2>
          <p className="muted">
            {data.approvals.filter((row) => row.status === "pending").length}{" "}
            pending requests
          </p>
        </div>
        <button
          className="btn secondary"
          type="button"
          onClick={() => refresh()}
        >
          Refresh
        </button>
      </div>
      {action.error && <p role="alert">{action.error}</p>}
      <div className="approval-list">
        {data.approvals.map((row) => (
          <article className="card approval-card" key={row._id}>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div>
                <h3>{row.title || row.resourceType}</h3>
                <p className="muted">
                  {row.requesterName || "Employee"} requested {row.action} on{" "}
                  {row.resourceType}
                </p>
              </div>
              <span className={`pill${row.status === "approved" ? " on" : ""}`}>
                {row.status}
              </span>
            </div>
            <pre className="approval-payload">
              {JSON.stringify(row.payload || {}, null, 2)}
            </pre>
            {row.reviewNote && <p>Note: {row.reviewNote}</p>}
            {isManager &&
              row.status === "pending" &&
              (isOwner || String(row.requester) !== String(user.id)) && (
                <div className="row">
                  <button
                    type="button"
                    className="btn green"
                    disabled={action.busy}
                    onClick={() => action.run(() => review(row, "approve"))}
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    className="btn danger"
                    disabled={action.busy}
                    onClick={() => action.run(() => review(row, "reject"))}
                  >
                    Reject
                  </button>
                </div>
              )}
          </article>
        ))}
      </div>
      {!data.approvals.length && (
        <div className="empty">No approval requests yet.</div>
      )}
    </>
  );
}
export function VisibilitySettings({ services = false }) {
  const { data, mutate } = useAdmin(),
    action = useAction();
  const rows = services
    ? data.whatWeDoServices
    : [
        "hero",
        "why",
        "clients",
        "whatwedo",
        "projects",
        "services",
        "cases",
        "map",
        "feedback",
        "insights",
      ].map((key) => ({
        key,
        label: key,
        enabled:
          data.sections.find((row) => row.key === key)?.enabled !== false,
      }));
  return (
    <>
      <div className="toolbar">
        <div>
          <h2>{services ? "What We Do Services" : "Sections"}</h2>
          <p className="muted">
            Control which content appears on the homepage.
          </p>
        </div>
      </div>
      {action.error && <p role="alert">{action.error}</p>}
      <div className="cards">
        {rows.map((row) => (
          <article className="card" key={row.key}>
            <h3>{row.label || row.key}</h3>
            <span className={`pill${row.enabled !== false ? " on" : ""}`}>
              {row.enabled !== false ? "Visible" : "Hidden"}
            </span>
            <button
              type="button"
              className={`btn ${row.enabled !== false ? "danger" : "green"}`}
              disabled={action.busy}
              onClick={() =>
                action.run(() =>
                  mutate(
                    services ? "whatWeDoServices" : "sections",
                    "update",
                    { enabled: row.enabled === false },
                    row.key,
                    row.label || row.key,
                  ),
                )
              }
            >
              {row.enabled !== false ? "Turn Off" : "Turn On"}
            </button>
          </article>
        ))}
      </div>
    </>
  );
}
export function Submissions() {
  const { data, isOwner, mutate, ask } = useAdmin(),
    action = useAction();
  return (
    <>
      <h2>Contact Leads</h2>
      {action.error && <p role="alert">{action.error}</p>}
      {data.submissions.length ? (
        <div className="table-scroll">
          <table className="table">
            <thead>
              <tr>
                {[
                  "Date",
                  "Source",
                  "Name",
                  "Email",
                  "Phone",
                  "Company",
                  "Message",
                  "Attachment",
                  "Reply",
                  "Action",
                ].map((label) => (
                  <th key={label}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.submissions.map((row) => (
                <tr key={row._id}>
                  <td>
                    {row.createdAt
                      ? new Date(row.createdAt).toLocaleString()
                      : ""}
                  </td>
                  <td>{row.source}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.company}</td>
                  <td>{row.desc}</td>
                  <td>
                    {safeUrl(mediaUrl(row.attachmentUrl || "")) && (
                      <a
                        href={mediaUrl(row.attachmentUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open
                      </a>
                    )}
                  </td>
                  <td>
                    <div className="row">
                      <a
                        className="btn secondary"
                        href={`mailto:${encodeURIComponent(row.email || "")}?subject=${encodeURIComponent("Reply from Sakinzo")}`}
                      >
                        Email
                      </a>
                      {row.phone && (
                        <a
                          className="btn green"
                          href={`https://wa.me/${row.phone.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp
                        </a>
                      )}
                    </div>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn danger"
                      disabled={action.busy}
                      onClick={() =>
                        action.run(async () => {
                          if (
                            await ask({
                              title: "Delete submission",
                              message: isOwner
                                ? "Delete this contact lead permanently?"
                                : "Send deletion for approval?",
                            })
                          )
                            await mutate(
                              "submissions",
                              "delete",
                              {},
                              row._id,
                              "Delete submission",
                            );
                        })
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty">No submissions yet.</div>
      )}
    </>
  );
}
export function ContactSettings() {
  const { data, mutate, setEditing, isOwner } = useAdmin(),
    [values, setValues] = useState(() => ({
      ...contactDefaults,
      ...data.contactPage,
    })),
    action = useAction();
  return (
    <>
      <div className="toolbar">
        <div>
          <h2>Contact Page</h2>
          <p className="muted">
            Manage page copy, office locations and contact methods.
          </p>
        </div>
        <Link className="btn secondary" to="/contact">
          Preview Contact Page
        </Link>
      </div>
      <div className="contact-admin-grid">
        <form
          className="card"
          id="contactSettingsForm"
          onSubmit={(event) => {
            event.preventDefault();
            action.run(() =>
              mutate(
                "contactPage",
                "update",
                values,
                "main",
                "Contact page content",
              ),
            );
          }}
        >
          <h3>Page Content</h3>
          <div className="grid2">
            {Object.keys(contactDefaults).map((name) => (
              <Field
                key={name}
                field={{ name, type: "String" }}
                value={values[name]}
                onChange={(value) =>
                  setValues((previous) => ({ ...previous, [name]: value }))
                }
              />
            ))}
          </div>
          {action.error && <p role="alert">{action.error}</p>}
          <button className="btn primary" disabled={action.busy}>
            {action.busy
              ? "Saving…"
              : isOwner
                ? "Save Contact Page"
                : "Send for approval"}
          </button>
        </form>
        <div className="card">
          <div className="row">
            <h3>Offices</h3>
            <button
              type="button"
              className="btn primary"
              onClick={() => setEditing({ type: "contactOffices" })}
            >
              + Add Office
            </button>
          </div>
          <ResourceList type="contactOffices" />
        </div>
      </div>
      <div className="contact-leads-panel">
        <Submissions />
      </div>
    </>
  );
}
export function Profile() {
  const { user, isOwner, token, request, approval, refresh, notify } =
      useAdmin(),
    [values, setValues] = useState(() =>
      Object.fromEntries(
        ["name", "email", "profileImage", "phone", "bio"].map((key) => [
          key,
          user[key] || "",
        ]),
      ),
    ),
    action = useAction();
  const submit = (event) => {
    event.preventDefault();
    action.run(async () => {
      if (isOwner)
        await request(`/admins/${user.id}`, {
          method: "PUT",
          body: JSON.stringify(values),
        });
      else
        await approval(
          "admins",
          "profile-update",
          values,
          user.id,
          "Profile update",
        );
      await refresh(true);
      notify(isOwner ? "Profile saved" : "Approval request sent");
    });
  };
  return (
    <>
      <div className="toolbar">
        <h2>Profile</h2>
      </div>
      <div className="profile-grid">
        <div className="card profile-card">
          <Avatar user={{ ...user, ...values }} />
          <h3>{user.name}</h3>
          <p>{user.position || "Employee"}</p>
          <span className="pill">{user.role}</span>
          <p>{user.email}</p>
          <p>{user.employeeId}</p>
        </div>
        <form className="card profile-form" id="profileForm" onSubmit={submit}>
          <h3>Edit Profile</h3>
          {Object.keys(values).map((name) => (
            <Field
              key={name}
              field={{ name, type: "String" }}
              value={values[name]}
              required={["name", "email"].includes(name)}
              onChange={(value) =>
                setValues((previous) => ({ ...previous, [name]: value }))
              }
            />
          ))}
          <label className="field">
            Upload profile picture
            <input
              type="file"
              accept="image/*"
              disabled={action.busy}
              onChange={(event) => {
                const file = event.target.files[0];
                if (file)
                  action.run(async () => {
                    const url = await uploadMedia(file, token);
                    setValues((previous) => ({
                      ...previous,
                      profileImage: url,
                    }));
                  });
              }}
            />
          </label>
          {action.error && <p role="alert">{action.error}</p>}
          <button className="btn primary" disabled={action.busy}>
            {action.busy
              ? "Saving…"
              : isOwner
                ? "Save profile"
                : "Send for approval"}
          </button>
        </form>
      </div>
    </>
  );
}
