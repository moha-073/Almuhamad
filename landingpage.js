const buttons = document.querySelectorAll(".order-btn");
const names = document.querySelectorAll(".name");
const prices = document.querySelectorAll(".price");
const cartBtn = document.getElementById("cart-btn");
const viewCartBtn = document.getElementById("view-cart");
const images = document.querySelectorAll(".container .box li .img");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest("li");

    const name = item.querySelector(".name").textContent;
    const price = Number(item.querySelector(".price").dataset.price);
    const image = item.querySelector(".img").src;

    const existing = cart.find(p => p.name === name);

    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      animateAddToCart(btn);
  });

});

function updateCartCount() {
  let count = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBtn) cartBtn.textContent = `Cart (${count})`;
}

function animateAddToCart(button) {
  button.classList.add("added");
  setTimeout(() => button.classList.remove("added"), 300);
}

updateCartCount();

cartBtn.addEventListener("click", () => {
  window.location.href = "cart.html";
});



