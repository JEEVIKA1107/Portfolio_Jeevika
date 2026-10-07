/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

if (window.innerWidth > 760) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;

    });

}


/* ==========================================
   CURSOR HOVER EFFECT
========================================== */

const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .skill-card, .cert-card"
);

hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        if (window.innerWidth > 760) {

            cursor.style.width = "55px";
            cursor.style.height = "55px";
            cursor.style.background = "rgba(183,255,60,.05)";

        }

    });

    element.addEventListener("mouseleave", () => {

        if (window.innerWidth > 760) {

            cursor.style.width = "32px";
            cursor.style.height = "32px";
            cursor.style.background = "transparent";

        }

    });

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* CLOSE MOBILE MENU */

document.querySelectorAll("#navMenu a").forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .cert-card, .leadership-item, .about-content"
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    observer.observe(element);

});


/* ==========================================
   3D HERO CARD MOVEMENT
========================================== */

const heroVisual = document.querySelector(".hero-visual");
const codeCard = document.querySelector(".code-card");

if (heroVisual && window.innerWidth > 900) {

    heroVisual.addEventListener("mousemove", (e) => {

        const rect = heroVisual.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        codeCard.style.transform =
            `perspective(1000px)
             rotateY(${rotateY}deg)
             rotateX(${rotateX}deg)`;

    });


    heroVisual.addEventListener("mouseleave", () => {

        codeCard.style.transform =
            "perspective(1000px) rotateY(-5deg) rotateX(2deg)";

    });

}


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const phrases = [
    "WEB DEVELOPER",
    "AI ENTHUSIAST",
    "PROBLEM SOLVER",
    "TECH EXPLORER"
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".available");

function typeEffect() {

    if (!typingElement) return;

    const text = phrases[phraseIndex];

    // Keep the green status dot
    typingElement.innerHTML = `
        <span></span>
        ${text.substring(0, charIndex)}
    `;

    if (!deleting) {

        // Type characters
        if (charIndex < text.length) {

            charIndex++;

            setTimeout(typeEffect, 90);

        } else {

            // Fully typed — wait before deleting
            deleting = true;

            setTimeout(typeEffect, 1800);
        }

    } else {

        // Delete characters
        if (charIndex > 0) {

            charIndex--;

            setTimeout(typeEffect, 50);

        } else {

            // Move to next phrase
            deleting = false;

            phraseIndex =
                (phraseIndex + 1) % phrases.length;

            setTimeout(typeEffect, 300);
        }
    }
}

typeEffect();

/* ==========================================
   PROJECT CARD TILT
========================================== */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        if (window.innerWidth < 900) return;

        const rect = card.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) /
            rect.width;

        const y =
            (e.clientY - rect.top) /
            rect.height;

        const rotateX =
            (0.5 - y) * 4;

        const rotateY =
            (x - 0.5) * 4;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ==========================================
   CURRENT YEAR
========================================== */

const yearElement =
    document.querySelector("footer span");

if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} Jeevika Senthilkumar`;

}
