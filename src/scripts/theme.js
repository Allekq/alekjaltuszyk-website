(() => {
  const key = "site-appearance";
  const root = document.documentElement;
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const normalize = (value) => value === "light" || value === "dark" ? value : "system";
  const read = () => {
    try { return normalize(localStorage.getItem(key)); }
    catch { return "system"; }
  };
  let preference = read();

  const apply = () => {
    if (preference === "system") root.removeAttribute("data-theme");
    else root.dataset.theme = preference;
    const resolved = preference === "system" ? (system.matches ? "dark" : "light") : preference;
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute("content", meta.getAttribute(`data-theme-${resolved}`));
    });
    document.querySelectorAll("[data-theme-select]").forEach((select) => {
      select.value = preference;
    });
  };

  apply();
  system.addEventListener("change", apply);
  window.addEventListener("storage", (event) => {
    if (event.key === key || event.key === null) {
      preference = read();
      apply();
    }
  });
  window.addEventListener("pageshow", () => {
    preference = read();
    apply();
  });
  document.addEventListener("DOMContentLoaded", () => {
    apply();
    document.querySelectorAll("[data-theme-picker]").forEach((picker) => {
      picker.hidden = false;
    });
    document.querySelectorAll("[data-theme-select]").forEach((select) => {
      select.addEventListener("change", () => {
        preference = normalize(select.value);
        try {
          if (preference === "system") localStorage.removeItem(key);
          else localStorage.setItem(key, preference);
        } catch { /* The current page still works when storage is unavailable. */ }
        apply();
      });
    });
  }, { once: true });
})();
