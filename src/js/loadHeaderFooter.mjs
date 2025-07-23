export default function loadHeaderFooter() {
  const headerEl = document.getElementById("main-header");
  const footerEl = document.getElementById("main-footer");

  fetch("/partials/header.html")
    .then((res) => res.text())
    .then((data) => {
      headerEl.innerHTML = data;
    });

  fetch("/partials/footer.html")
    .then((res) => res.text())
    .then((data) => {
      footerEl.innerHTML = data;
      document.getElementById("year").textContent = new Date().getFullYear();
    });
}
