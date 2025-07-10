import { setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.dataSource = dataSource;
    this.product = {};
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addProductToCart.bind(this));
  }

  addProductToCart() {
    let cart = JSON.parse(localStorage.getItem("so-cart")) || [];
    cart.push(this.product);
    localStorage.setItem("so-cart", JSON.stringify(cart));
  }

  renderProductDetails() {
    document.querySelector(".product-detail").innerHTML = `
      <h3>${this.product.Name}</h3>
      <img src="${this.product.Image}" alt="${this.product.Name}" />
      <p>${this.product.Description}</p>
      <p>Price: $${this.product.FinalPrice}</p>
      <button id="addToCart">Add to Cart</button>
    `;
  }
}
