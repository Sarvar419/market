function updateQuantity(change) {
    let quantityElem = document.getElementById("quantity");
    let quantity = parseInt(quantityElem.innerText);
    if (quantity + change >= 0) {
        quantityElem.innerText = quantity + change;
    }
}

function changeImage(element) {
    document.querySelector(".main-image").src = element.src;
}

function toggleCart() {
    let cart = document.getElementById("cart");
    if (cart) {
        cart.style.display = cart.style.display === "none" ? "block" : "none";
    } else {
        console.error("Element with id 'cart' not found.");
    }
}
