// BUSINESS LANDING PAGE LOGIC

// smooth scroll for nav + get started
const smoothLinks = document.querySelectorAll('a[href^="#"], #get-started');

smoothLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href") || "#contact";
    if (!targetId.startsWith("#")) return;
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// highlight active section on scroll
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  sections.forEach((sec) => {
    const top = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});

// fake contact submit
const contactForm = document.getElementById("contact-form");
const contactNote = document.getElementById("contact-note");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactNote.textContent =
      "Message sent! (demo only — this would email Hoyt in production.)";
    contactForm.reset();
  });
}
