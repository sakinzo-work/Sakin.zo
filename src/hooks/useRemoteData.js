import { useEffect, useState } from "react";
import { getJson } from "../lib/api.js";
export default function useRemoteData(endpoint) {
  const [revision, setRevision] = useState(0);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    const controller = new AbortController();
    if (!endpoint) {
      setState({ data: null, loading: false, error: null });
      return;
    }
    setState({ data: null, loading: true, error: null });
    getJson(endpoint, controller.signal)
      .then((data) => {
        if (!controller.signal.aborted)
          setState({ data, loading: false, error: null });
      })
      .catch((error) => {
        if (!controller.signal.aborted)
          setState({ data: null, loading: false, error });
      });
    return () => controller.abort();
  }, [endpoint, revision]);
  return { ...state, refresh: () => setRevision((value) => value + 1) };
}
