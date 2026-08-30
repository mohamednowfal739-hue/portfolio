const typingElement = document.getElementById("typing");
const roles = ["Full Stack Developer", "Computer Science Student", "AI Enthusiast"];
let roleIndex = 0, charIndex = 0, deleting = false;

function typeEffect() {
  const current = roles[roleIndex];
  typingElement.textContent = current.slice(0, charIndex);
  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 85);
  } else if (!deleting && charIndex === current.length) {
    deleting = true;
    setTimeout(typeEffect, 1500);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 45);
  } else {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 350);
  }
}
typeEffect();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  document.querySelector(".scroll-progress").style.width = (scrollTop / height) * 100 + "%";
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("senderName").value.trim();
  const email = document.getElementById("senderEmail").value.trim();
  const message = document.getElementById("senderMessage").value.trim();
  const subject = encodeURIComponent("Portfolio enquiry from " + name);
  const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
  window.location.href = `mailto:mohamednowfal739@gmail.com?subject=${subject}&body=${body}`;
});