// ===============================
// BUSINESS LANDING PAGE - JS
// ===============================

// 1) Smooth scroll for nav links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    // ignore real external links
    if (targetId === "#" || !targetId.startsWith("#")) return;

    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// 2) Highlight active section in navbar on scroll
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav"); // only if you ever need offset
const offset = 120; // small offset so it switches a little earlier

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - offset;
    if (scrollY >= sectionTop) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});

// 3) Contact form logic (demo submit)
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // simple email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      formStatus.textContent = "Please fill in all fields.";
      formStatus.style.color = "#d9534f";
      return;
    }

    if (!emailPattern.test(email)) {
      formStatus.textContent = "Please enter a valid email.";
      formStatus.style.color = "#d9534f";
      return;
    }

    // success
    formStatus.textContent = "Message sent! (demo only)";
    formStatus.style.color = "#28a745";

    contactForm.reset();
  });
}

