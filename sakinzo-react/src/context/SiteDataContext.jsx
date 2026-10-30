import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getJson } from "../lib/api.js";
const empty = {
  projects: [],
  clients: [],
  stats: [],
  team: [],
  testimonials: [],
  mapLocations: [],
  contactOffices: [],
  contactPage: {},
  sections: {},
  whatWeDoServices: {},
  insights: [],
  blogs: [],
};
const Context = createContext({ site: empty, loading: true, error: null });
export function SiteDataProvider({ children }) {
  const [state, setState] = useState(() => {
    try {
      const cached = JSON.parse(
        localStorage.getItem("sakinzo-site-data-v6") || "null",
      );
      return {
        site: { ...empty, ...cached?.data },
        loading: true,
        error: null,
      };
    } catch {
      return { site: empty, loading: true, error: null };
    }
  });
  const refresh = useCallback(async (signal) => {
    try {
      const data = await getJson("/public/site-data", signal);
      if (signal?.aborted) return;
      setState({ site: { ...empty, ...data }, loading: false, error: null });
      try {
        localStorage.setItem(
          "sakinzo-site-data-v6",
          JSON.stringify({ data, savedAt: Date.now() }),
        );
      } catch {}
    } catch (error) {
      if (!signal?.aborted)
        setState((previous) => ({ ...previous, loading: false, error }));
    }
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    refresh(controller.signal);
    return () => controller.abort();
  }, [refresh]);
  return (
    <Context.Provider value={{ ...state, refresh }}>
      {children}
    </Context.Provider>
  );
}
export const useSiteData = () => useContext(Context);
export const visibleItems = (rows) =>
  (Array.isArray(rows) ? rows : [])
    .filter((row) => row.visible !== false)
    .sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));
