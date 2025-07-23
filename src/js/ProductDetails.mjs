export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.dataSource = dataSource;
  }

  async init() {
    const product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails(product);
  }

  renderProductDetails(product) {
    const element = document.querySelector(".product-detail");
    if (!element) return;

    element.innerHTML = `
      <h2>${product.Name}</h2>
      <img src="${product.Image}" alt="${product.Name}">
      <p>${product.Description}</p>
      <p><strong>Price:</strong> $${product.FinalPrice}</p>
    `;
  }
}
