// ================= CART SYSTEM =================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
document.querySelectorAll(".product-card button").forEach(btn => {
    btn.addEventListener("click", (e) => {

        const card = e.target.closest(".product-card");

        const name = card.querySelector("h3").innerText;
        const price = card.querySelector("p").innerText;
        const img = card.querySelector("img").src;

        const product = {
            name,
            price,
            img
        };

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Added to cart ✔");
    });
});


// OPEN CART (simple page simulation)
function openCart(){

    let total = 0;

    let html = "<h2>Your Cart</h2>";

    cart.forEach(item => {

        html += `
        <div style="display:flex;gap:10px;margin:10px 0;">
            <img src="${item.img}" width="60">
            <div>
                <p>${item.name}</p>
                <small>${item.price}</small>
            </div>
        </div>`;

        total += parseFloat(item.price.replace("€",""));
    });

    html += `<h3>Total: €${total.toFixed(2)}</h3>`;

    html += `<button onclick="checkout()">Checkout</button>`;

    const win = window.open("");
    win.document.write(html);
}


// CHECKOUT (future payment page)
function checkout(){
    alert("Payment system (Visa/Mastercard) will be added next 🔥");
}


// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn){
    menuBtn.onclick = () => {
        mobileMenu.classList.toggle("open");
    }
}


// SCROLL ANIMATION SIMPLE
const elements = document.querySelectorAll(".card, .product-card, .lookbook-text");

window.addEventListener("scroll", () => {

    elements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }

    });

});