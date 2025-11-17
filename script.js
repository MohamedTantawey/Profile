// Toggle mobile navigation menu
const navToggle = document.getElementById("navToggle");
const navList = document.querySelector(".nav__list");

navToggle?.addEventListener("click", () => {
  navList?.classList.toggle("open");
  navToggle.classList.toggle("open");
});

// Close menu on link click (mobile)
navList?.addEventListener("click", (event) => {
  if (event.target.classList.contains("nav__link")) {
    navList.classList.remove("open");
    navToggle?.classList.remove("open");
  }
});

// Smooth active link highlight using Intersection Observer
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      );
    });
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

// Fade-in animations
const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));

// Update footer year
const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear().toString();

// Prevent default submission for demo purposes
const contactForm = document.querySelector(".contact__form");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.reset();
  contactForm.classList.add("submitted");
  alert("Thanks for reaching out! I'll reply soon.");
});

