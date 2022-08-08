const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", togleDesktopMenu);
menuHamIcon.addEventListener("click", togleMobileMenu);
menuCarritoIcon.addEventListener("click", togleCarritoAside);

function togleDesktopMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function togleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function togleCarritoAside() {
  const isMobileClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
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

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

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