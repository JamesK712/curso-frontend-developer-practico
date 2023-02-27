const navbar = document.querySelector(".navbar-email");
const navBarVertical = document.querySelector(".menu");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const carShop = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

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

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  imagen: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});

productList.push({
  name: "TV",
  price: 620,
  imagen: `https://home.ripley.com.pe/Attachment/WOP_5/2018295640236/2018295640236-1.jpg`,
});

productList.push({
  name: "Car",
  price: 22620,
  imagen: `https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=m3&options=$APBS,$DV2W,$IBB1,$PPSW,$PRM30,$SC04,$MDL3,$W40B,$MT322,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&`,
});

productList.push({
  name: "Picachu",
  price: 1,
  imagen: `https://static.wikia.nocookie.net/wikianimeotaku/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20160211185004&path-prefix=es`,
});

/*
<div class="cards-container">
        <div class="product-card">
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
          <div class="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
          </div>
        </div>
      </div>
      */

function showProduct(arrays) {
  for (const product of arrays) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.imagen);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productInfoPrice = document.createElement("p");
    productInfoPrice.innerHTML = "$ " + product.price;

    const productInfoName = document.createElement("p");
    productInfoName.innerHTML = product.name;

    const productFigures = document.createElement("figure");
    const card = document.createElement("img");

    card.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoDiv.append(productInfoName, productInfoPrice);
    productFigures.append(card);
    productInfo.append(productInfoDiv, productFigures);

    productCard.append(img, productInfo);
    cardsContainer.append(productCard);
  }
}

showProduct(productList);
