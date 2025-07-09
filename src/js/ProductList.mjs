import { renderListWithTemplate } from './utils.mjs';

function productCardTemplate(product) {
  const html = `
    <li class="product-card">
      <a href="./product_pages/index.html?product=${product.Id}">
        <img src="${product.Image}" alt="${product.Name}" />
        <h2>${product.Name}</h2>
        <p>$${product.FinalPrice}</p>
      </a>
    </li>
  `;
  return html;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}
