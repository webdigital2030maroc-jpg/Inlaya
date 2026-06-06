// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn && mobileMenu){

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

    });

}


// ==========================
// CLOSE MENU AFTER CLICK
// ==========================

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});


// ==========================
// HEADER SHADOW ON SCROLL
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 8px 20px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow = "none";

    }

});


// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(

    ".card, .testimonial, .about-box, .lookbook-text, .lookbook-image, .gallery-grid img, .instagram-grid img"

);

function revealOnScroll(){

    revealElements.forEach((element)=>{

        const top =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0)";

        }

    });

}

revealElements.forEach((element)=>{

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "all .8s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ==========================
// IMAGE HOVER EFFECT
// ==========================

document
.querySelectorAll(
".gallery-grid img, .instagram-grid img"
)

.forEach((image)=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform =
        "scale(1.05)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform =
        "scale(1)";

    });

});


// ==========================
// PRODUCT BUTTON EFFECT
// ==========================

document
.querySelectorAll(".card button")

.forEach((button)=>{

    button.addEventListener("click",()=>{

        button.innerText =
        "Selected";

        button.style.background =
        "#444";

    });

});


// ==========================
// SMOOTH SCROLL LINKS
// ==========================

document
.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

    anchor.addEventListener("click",

    function(e){

        e.preventDefault();

        const target =
        document.querySelector(

        this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ==========================
// SIMPLE LOADING EFFECT
// ==========================

window.addEventListener("load",()=>{

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition =
"opacity .7s ease";


// ==========================
// FUTURE CART SYSTEM PLACE
// ==========================

// Cart system
// Stripe payment
// Product page
// Search
// Filters

// Later...