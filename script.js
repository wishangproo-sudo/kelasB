// 🔹 Partikel
tsParticles.load("tsparticles", {
  background: { color: "#0f172a" },
  fpsLimit: 60,
  interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
  particles: {
    color: { value: "#38bdf8" },
    links: { enable: true, color: "#38bdf8", distance: 120 },
    move: { enable: true, speed: 1 },
    number: { value: 60 },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: 3 }
  }
});

// 🔹 Navbar Toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => navLinks.classList.remove("show"))
);

// 🔹 Animasi fade-in saat scroll
const faders = document.querySelectorAll(".card, table");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add("show"); } });
}, { threshold: 0.2 });
faders.forEach(el => { el.classList.add("fade-in"); observer.observe(el); });

// 🔹 Typing Effect Splash
const text = "📘 Kelas Mahasiswa";
let index = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    // Setelah selesai ngetik, hilangkan splash
    setTimeout(() => {
      document.getElementById("splash").classList.add("hide");

      // 🔹 Tampilkan navbar & header dengan animasi fade-zoom
      document.querySelectorAll(".fade-zoom").forEach(el => {
        setTimeout(() => el.classList.add("show"), 300);
      });
    }, 1500);
  }
}

window.addEventListener("load", () => {
  setTimeout(typeEffect, 500); // jeda 0.5 detik sebelum mulai ngetik
});
