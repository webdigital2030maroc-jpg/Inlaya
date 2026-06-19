
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


const products = {

1:{
name:"Produit 1",
price:120.99,
description:"Produit élégant conçu pour offrir confort et style.",
img1:"images/product-1.jpeg",
img2:"images/product-1b.jpeg"
},

2:{
name:"Produit 2",
price:89.99,
description:"Collection moderne pour femme.",
img1:"images/product-2.jpeg",
img2:"images/product-2b.jpeg"
},

3:{
name:"Produit 3",
price:79.99,
description:"Tenue légère et raffinée.",
img1:"images/product-3.jpeg",
img2:"images/product-3b.jpeg"
},

4:{
name:"Produit 4",
price:109.99,
description:"Description produit 4",
img1:"images/product-4.jpeg",
img2:"images/product-4b.jpeg"
},

5:{
name:"Produit 5",
price:119.99,
description:"Description produit 5",
img1:"images/product-5.jpeg",
img2:"images/product-5b.jpeg"
},

6:{
name:"Produit 6",
price:129.99,
description:"Description produit 6",
img1:"images/product-6.jpeg",
img2:"images/product-6b.jpeg"
},

7:{
name:"Produit 7",
price:139.99,
description:"Description produit 7",
img1:"images/product-7.jpeg",
img2:"images/product-7b.jpeg"
},

8:{
name:"Produit 8",
price:149.99,
description:"Description produit 8",
img1:"images/product-8.jpeg",
img2:"images/product-8b.jpeg"
}

};



const params = new URLSearchParams(window.location.search);

const id = params.get("id");



if(id && products[id]){

const p = products[id];

document.getElementById("product-name").innerText =
p.name;


document.getElementById("product-price").innerText =
p.price + " €";


document.getElementById("product-description").innerText =
p.description;


document.getElementById("img1").src =
p.img1;


document.getElementById("img2").src =
p.img2;



document.getElementById("cartBtn").onclick = () => {

addToCart(

p.name,

p.price,

p.img1

);

};

}