import { getLocalStorage } from "./utils.mjs";

export function getCartContents() {
  let cart = getLocalStorage("so-cart");
  return Array.isArray(cart) ? cart : cart ? [cart] : [];
}

export function calculateCartTotal() {
  const cart = getCartContents();
  return cart.reduce((sum, item) => sum + Number(item.FinalPrice), 0);
}

export function countCartItems() {
  const cart = getCartContents();
  return cart.length;
}
