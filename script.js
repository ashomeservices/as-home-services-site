const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
const quoteForm = document.querySelector("#quote-form");

toggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    mobileNav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

quoteForm.addEventListener("submit", () => {
  quoteForm.querySelector(".form-status").textContent = "Sending your request. Thank you for reaching out to A.S. Home Services.";
});
