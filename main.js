/* Variables */

const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", togleDesktopMenu);
menuHamIcon.addEventListener("click", togleMobileMenu);
menuCarritoIcon.addEventListener("click", togleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

/* Funciones de los menús */

function togleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function togleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");

  closeProductDetailAside();
}

function togleCarritoAside() {
  const isMobileClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailCLosed = productDetailContainer.classList.contains("inactive");

  if (!isProductDetailCLosed) {
    productDetailContainer.classList.add("inactive");
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive")
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

/* 
<div class="product-card">
  <img
    src="https://images.unsplash.com/photo-1612387049695-637b743f80ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80"
    alt=""
  />
  <div class="product-info">
    <div>
      <p>120,00 €</p>
      <p>Boots</p>
    </div>
    <figure>
      <img src="/Assets/icons/bt_add_to_cart.svg" alt="" />
    </figure>
  </div>
</div>; 
*/

const productList = [];

productList.push({
  name: "Adidas Boots",
  price: 99,
  image: "./Assets/boots.jpg",
});

productList.push({
  name: "NB Boots",
  price: 90,
  image: "./Assets/boots-1.jpg",
});

productList.push({
  name: "Nike Boots",
  price: 120,
  image: "./Assets/boots-2.jpg",
});

productList.push({
  name: "Adidas Boots",
  price: 99,
  image: "./Assets/boots.jpg",
});

productList.push({
  name: "NB Boots",
  price: 90,
  image: "./Assets/boots-1.jpg",
});

productList.push({
  name: "Nike Boots",
  price: 120,
  image: "./Assets/boots-2.jpg",
});

productList.push({
  name: "Adidas Boots",
  price: 99,
  image: "./Assets/boots.jpg",
});

productList.push({
  name: "NB Boots",
  price: 90,
  image: "./Assets/boots-1.jpg",
});

productList.push({
  name: "Nike Boots",
  price: 120,
  image: "./Assets/boots-2.jpg",
});

productList.push({
  name: "Adidas Boots",
  price: 99,
  image: "./Assets/boots.jpg",
});

productList.push({
  name: "NB Boots",
  price: 90,
  image: "./Assets/boots-1.jpg",
});

productList.push({
  name: "Nike Boots",
  price: 120,
  image: "./Assets/boots-2.jpg",
});

productList.push({
  name: "Adidas Boots",
  price: 99,
  image: "./Assets/boots.jpg",
});

productList.push({
  name: "NB Boots",
  price: 90,
  image: "./Assets/boots-1.jpg",
});

productList.push({
  name: "Nike Boots",
  price: 120,
  image: "./Assets/boots-2.jpg",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = product.price + "€";

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "/Assets/icons/bt_add_to_cart.svg");

    productInfoFigure.append(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);
  }
}

renderProducts(productList);
