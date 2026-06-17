
// ================= CART =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


// ADD FROM PRODUCT PAGE
function addToCart(name, price, img = "images/product-1.jpeg") {

    const qtyEl = document.getElementById("qty");
    const qty = qtyEl ? parseInt(qtyEl.innerText) : 1;

    cart.push({
        name,
        price: parseFloat(price),
        img,
        qty
    });

    saveCart();

    window.location.href = "cart.html";
}


// ================= CART PAGE =================
function loadCart() {

    let container = document.getElementById("cart-items");
    if (!container) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * (item.qty || 1);

        container.innerHTML += `
        <div class="card">
            <img src="${item.img}" width="80">
            <div>
                <p>${item.name}</p>
                <p>${item.price} €</p>
                <p>Qty: ${item.qty || 1}</p>
                <button onclick="removeItem(${index})">Remove ❌</button>
            </div>
        </div>
        `;
    });

    document.getElementById("total").innerText = "Total: " + total.toFixed(2) + " €";
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    loadCart();
}

if (document.getElementById("cart-items")) {
    loadCart();
}


// ================= SLIDER =================
document.querySelectorAll('[data-slider]').forEach(slider => {

    const images = slider.querySelectorAll('img');
    let index = 0;

    const show = (i) => {
        images.forEach(img => img.classList.remove('active'));
        images[i].classList.add('active');
    };

    slider.querySelector('.next')?.addEventListener('click', () => {
        index = (index + 1) % images.length;
        show(index);
    });

    slider.querySelector('.prev')?.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        show(index);
    });
});


// ================= QUANTITY =================
function initQuantity() {

    const minusBtn = document.querySelector(".quantity-box button:first-child");
    const plusBtn = document.querySelector(".quantity-box button:last-child");
    const quantityText = document.querySelector(".quantity-box span");

    let quantity = 1;

    if (!minusBtn || !plusBtn || !quantityText) return;

    plusBtn.addEventListener("click", () => {
        quantity++;
        quantityText.innerText = quantity;
    });

    minusBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityText.innerText = quantity;
        }
    });
}

initQuantity();


// ================= MOBILE MENU =================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("open");
});


// ================= SCROLL ANIMATION =================
const elements = document.querySelectorAll(".card, .product-card, .lookbook-text");

window.addEventListener("scroll", () => {

    elements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }

    });

});