// =========================
// Main Script for SeaBlue Aid
// =========================
document.addEventListener("DOMContentLoaded", () => {
  // ----- Responsive Menu Toggle -----
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // ----- Statistics Stimulator -----
  const stats = document.querySelectorAll(".fs-card h3");
  const btn = document.getElementById("stimulateStats");

  function animateStats() {
    stats.forEach(stat => {
      let target = parseInt(stat.getAttribute("data-target"), 10);

      // Every click increases target by +50 (you can change this value)
      target += 50;
      stat.setAttribute("data-target", target);

      let current = parseInt(stat.textContent.replace(/,/g, ""), 10) || 0;

      const duration = 2000; // total animation time
      const stepTime = 20;   // update every 20ms
      const steps = duration / stepTime;
      const increment = (target - current) / steps;

      const counter = setInterval(() => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.floor(current).toLocaleString();
        } else {
          stat.textContent = target.toLocaleString();
          clearInterval(counter);
        }
      }, stepTime);
    });
  }

  if (btn) {
    btn.addEventListener("click", animateStats);
  }
});
// ----- Newsletter Subscribe -----
const newsletterForm = document.querySelector(".footer-newsletter form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault(); // stop the page from reloading

    const emailInput = newsletterForm.querySelector("input[type='email']");
    const email = emailInput.value.trim();

    if (email && email.includes("@")) {
      alert(`✅ Thank you for subscribing, ${email}!`);
      emailInput.value = ""; // clear input after success
    } else {
      alert("⚠️ Please enter a valid email address.");
    }
  });
}
// ----- Generic Form Handler (works without backend) -----
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    // Just for demo - grab first input value (if exists)
    const firstInput = form.querySelector("input, textarea, select");
    const value = firstInput ? firstInput.value.trim() : "";

    if (value !== "") {
      alert("✅ Thank you! Your form has been submitted successfully.");
      form.reset(); // clear fields
    } else {
      alert("⚠️ Please fill in the required fields.");
    }
  });
});







