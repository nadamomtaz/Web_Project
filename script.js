window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const loaderText = document.getElementById("loader-text");
    
    let count = 0;

    const counter = setInterval(() => {
        count++;
        if (loaderText) {
            loaderText.innerText = count + "%";
        }

        if (count === 100) {
            clearInterval(counter);
            setTimeout(() => {
                if (loader) {
                    loader.classList.add("loader-hidden");
                }
            }, 200);
        }
    }, 25);
});

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDot) {
        cursorDot.style.left = posX + "px";
        cursorDot.style.top = posY + "px";
    }

    if (cursorOutline) {
        cursorOutline.style.left = posX + "px";
        cursorOutline.style.top = posY + "px";
    }
});

const navlist = document.getElementById("navlist");
const hamburger = document.getElementById("hamburger");

if (hamburger && navlist) {
    hamburger.addEventListener("click", () => {
        navlist.classList.toggle("navlist-active");
    });
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.hero-section .content', {delay: 200, origin: 'left'});
sr.reveal('.hero-section .image-container', {delay: 200, origin: 'right'});
sr.reveal('.store-section h2, .store-section p', {delay: 200, origin: 'top'});
sr.reveal('.card', {delay: 200, origin: 'bottom', interval: 100});
sr.reveal('.contact-container', {delay: 200, origin: 'bottom'});
sr.reveal('.footer-list', {delay: 200, origin: 'bottom', interval: 100});