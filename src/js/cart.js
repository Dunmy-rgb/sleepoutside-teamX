import {
  getCartContents,
  calculateCartTotal,
  countCartItems,
} from "./cartUtils.mjs";

function renderCartContents() {
  const cartItems = getCartContents();
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const colorName = item.Colors?.[0]?.ColorName || "N/A";

  return `
    <li class="cart-card divider">
      <a href="../product_pages/index.html?product=${item.Id}" class="cart-card__image">
        <img src="${item.Image}" alt="${item.Name}" />
      </a>
      <a href="../product_pages/index.html?product=${item.Id}">
        <h2 class="card__name">${item.Name}</h2>
      </a>
      <p class="cart-card__color">${colorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">$${item.FinalPrice}</p>
    </li>
  `;
}

function displayCartTotal() {
  const total = calculateCartTotal();
  document.querySelector(".cart-total").textContent = `$${total.toFixed(2)}`;
}

function displayCartCount() {
  const count = countCartItems();
  document.querySelector(".cart-count").textContent = `${count}`;
}

renderCartContents();
displayCartTotal();
displayCartCount();
