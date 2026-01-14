// HEADER SHADOW
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

// ACTIVE NAV LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

// REVEAL
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navLinks");
const menuOverlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuBtn.classList.toggle("active");
  menuOverlay.classList.toggle("active");
});

/* Close menu when clicking background */
menuOverlay.addEventListener("click", () => {
  navMenu.classList.remove("open");
  menuBtn.classList.remove("active");
  menuOverlay.classList.remove("active");
});


// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();
