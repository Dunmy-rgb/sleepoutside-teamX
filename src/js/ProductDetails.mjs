import ProductDetails from "./ProductDetails.mjs";
import ProductData from "./ProductData.mjs";

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("product");
}

function renderYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

const productId = getProductIdFromURL();

if (productId) {
  const dataSource = new ProductData("tents"); // Or another category if applicable
  const product = new ProductDetails(productId, dataSource);
  product.init();
}

renderYear();
