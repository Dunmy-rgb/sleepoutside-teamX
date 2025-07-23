import { getLocalStorage } from "../js/utils.mjs";
import loadHeaderFooter from "../js/loadHeaderFooter.mjs";

loadHeaderFooter();

function renderCartSummary() {
  const items = getLocalStorage("so-cart") || [];
  const productList = document.querySelector(".product-list");
  const totalElement = document.getElementById("orderTotal");

  let total = 0;

  productList.innerHTML = items
    .map((item) => {
      total += Number(item.FinalPrice);
      return `
      <li class="cart-summary-item">
        <span>${item.Name}</span>
        <span>$${item.FinalPrice}</span>
      </li>`;
    })
    .join("");

  totalElement.textContent = total.toFixed(2);
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  alert("Order placed successfully!");
  localStorage.removeItem("so-cart");
  window.location.href = "/";
}

document
  .getElementById("checkout-form")
  .addEventListener("submit", handleCheckoutSubmit);
renderCartSummary();
