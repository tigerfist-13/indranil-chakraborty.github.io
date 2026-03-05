(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  // Load saved theme
  const saved = localStorage.getItem("theme");
  if (saved === "light") root.setAttribute("data-theme", "light");

  function updateIcon() {
    const isLight = root.getAttribute("data-theme") === "light";
    toggle.textContent = isLight ? "☀️" : "🌙";
  }
  updateIcon();

  toggle.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    updateIcon();
  });
})();
