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

quoteForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const status = quoteForm.querySelector(".form-status");
  const submitButton = quoteForm.querySelector('button[type="submit"]');
  const formData = new FormData(quoteForm);

  status.textContent = "Sending your request...";
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    const response = await fetch(quoteForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    quoteForm.reset();
    status.textContent = "Thank you! Your quote request has been sent. We'll contact you shortly.";
  } catch (error) {
    status.textContent = "Sorry, something went wrong. Please call or text (813) 509-9964.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send Free Quote Request";
  }
});
