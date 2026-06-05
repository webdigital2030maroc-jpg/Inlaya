// mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = () => {
mobileMenu.classList.toggle("open");
};

// scroll animation
const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
elements.forEach(el => {
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add("active");
}
});
});