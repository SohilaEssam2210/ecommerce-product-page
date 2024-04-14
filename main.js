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
  images = document.querySelectorAll(".preview img"),
  lightbox = document.querySelector(".lightbox"),
  closeLightBoxBtn = document.querySelector(".close-lightbox"),
  mainThumbnailLightBox = document.querySelector(
    ".lightbox-container .main-thumb"
  );

const amount = document.querySelector(".amount"),
  addBtn = document.querySelector(".add-btn");
let amountValue = 0;
indicator.style.display = "none";

function toggleMenu() {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
}
function handlePlus() {
  amountValue++;
  amount.innerHTML = amountValue;
}
function handleMinus() {
  if (amountValue > 1) {
    amountValue--;
  }
  amount.innerHTML = amountValue;
}

const imageSlider = () => {
  let currentImg = 1;
  const totalImg = 4,
    thumbMob = document.querySelector(".thum-mob");

  function nextImage() {
    currentImg = currentImg === totalImg ? 1 : currentImg + 1;
    updateImg();
  }
  function prevImage() {
    currentImg = currentImg === 1 ? totalImg : currentImg - 1;
    updateImg();
  }
  function updateImg() {
    thumbMob.src = `./images/image-product-${currentImg}.jpg`;
  }

  return {
    nextImage,
    prevImage,
  };
};

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
    let priece = 125.0;
    const total = priece * amountValue;
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

    // Extracting the image number from selectedImgSrc
    const regex = /image-product-(\d+)/;
    const match = selectedImgSrc.match(regex);
    const imageNumber = match ? match[1] : null; // Extract the captured group

    if (imageNumber) {
      const imagePath = `./images/image-product-${imageNumber}.jpg`;
      mainThumbnail.src = imagePath;
      mainThumbnailLightBox.src = imagePath;
    }
  });
});

overlay.addEventListener("click", toggleMenu);
mainThumbnail.addEventListener("click", openLightBox);
closeLightBoxBtn.addEventListener("click", closeLightBox);
menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
next.addEventListener("click", imageSlider().nextImage);
previous.addEventListener("click", imageSlider().prevImage);
plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
cartBtn.addEventListener("click", toggleCart);
addBtn.addEventListener("click", addItem);
