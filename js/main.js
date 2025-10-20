document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a[href]");
  const pathSegments = window.location.pathname.split("/");
  const currentFile = pathSegments[pathSegments.length - 1] || "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    if (currentFile === href) {
      link.classList.add("active");
    }
  });

  const navContainer = document.querySelector(".nav-container");
  const toggleNavElevation = () => {
    if (!navContainer) return;
    navContainer.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  toggleNavElevation();
  window.addEventListener("scroll", toggleNavElevation, { passive: true });

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("pointerenter", () => card.classList.add("is-hovered"));
    card.addEventListener("pointerleave", () => card.classList.remove("is-hovered"));
  });
});
