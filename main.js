const navbar = document.querySelector(".navbar-email");
const navBarVertical = document.querySelector(".menu");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const carShop = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navbar.addEventListener("click", toggleMenu);
navBarVertical.addEventListener("click", toggleMobileMenu);
carShop.addEventListener("click", toggleCarShop);

function toggleMenu() {
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarShop() {
  if (
    !desktopMenu.classList.contains("inactive") ||
    !mobileMenu.classList.contains("inactive")
  ) {
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
  }
  productDetail.classList.toggle("inactive");
}
