const menuBtn = document.querySelector(".menu"),
  navLinks = document.querySelector(".nav-links"),
  overlay = document.querySelector(".overlay"),
  closeBtn = document.querySelector(".close-btn"),
  cartBtn = document.querySelector(".cart-btn"),
  cartContent = document.querySelector(".cart-content"),
  indicator = document.querySelector(".indicator"),
  cartWrp = document.querySelector(".cart-wrp");

const mainThumbnail = document.querySelector(".main-thumb"),
  slider = document.querySelector(".mobile-thumb"),
  thumbMob = document.querySelector(".thum-mob"),
  images = document.querySelectorAll(".preview img"),
  previous = document.getElementById("previous"),
  next = document.getElementById("next"),
  lightbox = document.querySelector(".lightbox"),
  closeLightBoxBtn = document.querySelector(".close-lightbox"),
  mainThumbnailLightBox = document.querySelector(
    ".lightbox-container .main-thumb"
  );

const minusBtn = document.getElementById("minus"),
  amount = document.querySelector(".amount"),
  plusBtn = document.getElementById("plus"),
  addBtn = document.querySelector(".add-btn");

let amountValue = 0;
let currentImg = 1;

indicator.style.display = "none";

function openMenu() {
  navLinks.style.display = "flex";
  navLinks.classList.add("active");
  overlay.classList.add("active");
}
function closeMenu() {
  navLinks.style.display = "none";
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
}
function handlePlus() {
  amountValue++;
  amount.innerHTML = amountValue;
}
function handleMinus() {
  if (amountValue > 0) {
    amountValue--;
  }
  amount.innerHTML = amountValue;
}
function nextImage() {
  if (currentImg == 4) {
    currentImg = 1;
  } else {
    currentImg++;
  }
  thumbMob.src = `./images/image-product-${currentImg}.jpg`;
}
function prevImage() {
  if (currentImg == 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }
  thumbMob.src = `./images/image-product-${currentImg}.jpg`;
}
function toggleCart() {
  cartWrp.classList.toggle("invisible");
}
function openLightBox() {
  lightbox.classList.remove("invisible");
}
function closeLightBox() {
  lightbox.classList.add("invisible");
}

function addItem() {
  if (amountValue > 0) {
    const total = 125.0 * amountValue;
    cartContent.classList.remove("emty");
    cartContent.innerHTML = `
    <div class="product">
                  <div>
                    <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
                    <div class="product-info">
                      <p class="product-title">Fall Limited Edition Sneakers</p>
                      <p><span>$125.00</span> × <span class="number">${amountValue}</span> <b>$${total}</b></p>
                    </div>
                    <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
                  </div>
                  <button class="checkout-btn">Checkout</button>
                </div>
    `;
    indicator.style.display = "block";
    indicator.innerHTML = amountValue;
  }
}

function deleteItem() {
  cartContent.classList.add("emty");
  cartContent.innerHTML = `<p>Your cart is empty.</p>`;
  indicator.style.display = "none";
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    const lastImg = document.querySelector(".selected");
    if (lastImg) {
      lastImg.classList.remove("selected");
    }
    image.classList.add("selected");
    const selectedImgSrc = image.getAttribute("src");
    switch (selectedImgSrc) {
      case "./images/image-product-1-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-1.jpg";
        mainThumbnailLightBox.src = "./images/image-product-1.jpg";
        break;
      case "./images/image-product-2-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-2.jpg";
        mainThumbnailLightBox.src = "./images/image-product-2.jpg";
        break;
      case "./images/image-product-3-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-3.jpg";
        mainThumbnailLightBox.src = "./images/image-product-3.jpg";
        break;
      case "./images/image-product-4-thumbnail.jpg":
        mainThumbnail.src = "./images/image-product-4.jpg";
        mainThumbnailLightBox.src = "./images/image-product-4.jpg";
        break;
    }
  });
});


mainThumbnail.addEventListener("click", openLightBox);
closeLightBoxBtn.addEventListener("click", closeLightBox);
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
next.addEventListener("click", nextImage);
previous.addEventListener("click", prevImage);
plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
cartBtn.addEventListener("click", toggleCart);
addBtn.addEventListener("click", addItem);
