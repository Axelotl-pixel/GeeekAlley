// ===============================
// GEEKALLEY RESPONSIVE NAVIGATION
// ===============================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle the mobile menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Change the hamburger icon to an X
    if (navLinks.classList.contains("show")) {
        hamburger.innerHTML = "✕";
    } else {
        hamburger.innerHTML = "☰";
    }
});

// Close the menu after clicking a navigation link
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        hamburger.innerHTML = "☰";
    });
});

// Automatically close the menu when resizing to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("show");
        hamburger.innerHTML = "☰";
    }
});
