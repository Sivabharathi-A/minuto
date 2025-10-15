// cart.js - MODIFIED to ensure functions are globally accessible

// Use window.functionName = function() {} for robust access via inline onclick
window.removeFromCart = function(index) {
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    renderCart();  // instead of reload, just re-render the cart
}

// Keep the rest of the cart.js content as is:

const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
let total = 0;

window.renderCart = function() { // Also make renderCart global for consistency
    total = 0; // reset total before calculating
    cartContainer.innerHTML = "";
    if (!cartContainer) return; // Safety check

    cartItems.forEach((item, index) => {
        total += item.price;
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(div);
    });
    document.getElementById("total").innerText = `Total: ₹${total}`;
}

// Ensure the checkout listener works with a global function if needed
document.getElementById("checkout").addEventListener("click", () => {
    alert("Thank you for shopping with Zepto Clone!");
    localStorage.removeItem("cart");
    renderCart();
});

renderCart(); // Initial call to display the cart