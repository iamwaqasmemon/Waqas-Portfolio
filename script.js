
// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
});


// Close mobile menu after clicking a link

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections = document.querySelectorAll("main section[id]");

function updateActiveLink() {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach(element => {
    observer.observe(element);
});


// ==============================
// AUTOMATIC FOOTER YEAR
// ==============================

document.getElementById("current-year").textContent =
    new Date().getFullYear();


// ==============================
// CONSOLE MESSAGE
// ==============================

console.log("Waqas Ali Portfolio Loaded Successfully!");
