const apiBase = import.meta.env.VITE_API_BASE

if (apiBase) {
  window.API_BASE = apiBase
}
