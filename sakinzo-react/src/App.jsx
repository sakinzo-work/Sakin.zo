import { lazy, Suspense, useEffect, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SiteDataProvider } from "./context/SiteDataContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { MetadataProvider } from "./context/MetadataContext.jsx";
import { PageContext } from "./lib/PageContext.js";
import usePageStyles from "./hooks/usePageStyles.js";
import { appPath } from "./lib/paths.js";
import routes from "./data/routes.json";
const modules = import.meta.glob("./pages/*.jsx");
const pages = Object.fromEntries(
  Object.keys(modules).map((file) => [
    file.split("/").pop().slice(0, -4),
    lazy(modules[file]),
  ]),
);
const Admin = lazy(() => import("./features/admin/AdminPage.jsx"));
function Loading() {
  return (
    <div className="react-loading" role="status">
      Loading…
    </div>
  );
}
function Ready({ slug, children }) {
  const location = useLocation(),
    previous = useRef(null);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (location.hash) {
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView({ block: "start" });
      } else if (previous.current !== location.pathname)
        window.scrollTo({ top: 0, behavior: "instant" });
      previous.current = location.pathname;
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);
  return (
    <>
      <span hidden data-react-route={slug} />
      {children}
    </>
  );
}
function Page({ slug, admin = false }) {
  const ready = usePageStyles(slug),
    Component = admin ? Admin : pages[slug];
  if (!ready) return <Loading />;
  return (
    <PageContext.Provider value={slug}>
      <MetadataProvider slug={slug}>
        <Suspense fallback={<Loading />}>
          <Ready slug={slug}>
            <Component />
          </Ready>
        </Suspense>
      </MetadataProvider>
    </PageContext.Provider>
  );
}
function Fallback() {
  const location = useLocation();
  if (/\.html$/.test(location.pathname)) {
    const destination = appPath(
      location.pathname + location.search + location.hash,
    );
    if (destination !== location.pathname + location.search + location.hash)
      return <Navigate to={destination} replace />;
  }
  return (
    <main className="react-not-found">
      <h1>Page not found</h1>
      <p>The requested page is unavailable.</p>
      <a href={import.meta.env.BASE_URL}>Return to home</a>
    </main>
  );
}
export default function App() {
  return (
    <LanguageProvider>
      <SiteDataProvider>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<Page slug={route.slug} />}
            />
          ))}
          <Route path="/blog/:slug" element={<Page slug="blog" />} />
          <Route path="/projects/:id" element={<Page slug="project" />} />
          <Route
            path="/admin/:section?"
            element={<Page slug="admin" admin />}
          />
          <Route path="*" element={<Fallback />} />
        </Routes>
      </SiteDataProvider>
    </LanguageProvider>
  );
}
