const mainImage = document.querySelector(".main-image");
const thumbnailEls = document.querySelectorAll(".thumbnail");
const selectedThumbnailEl = document.querySelector(".selected-thumbnail");
const decreaseQuantityIcon = document.querySelector(".decrease-quantity-icon");
const increaseQuantityIcon = document.querySelector(".increase-quantity-icon");
const quantityAmountEl = document.querySelector(".quantity-amount");
let quantity = 0;
const cartEl = document.querySelector(".cart");
const cartCardEl = document.querySelector(".cart-card");

thumbnailEls.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    selectedThumbnailEl.remove();
    e.target.after(selectedThumbnailEl);
    mainImage.src = e.target.getAttribute("srcToFullImage");
  });
});

decreaseQuantityIcon.addEventListener("click", () => {
  decreaseQuantity();
  renderQuantityAmount();
});

increaseQuantityIcon.addEventListener("click", () => {
  increaseQuantity();
  renderQuantityAmount();
});

function decreaseQuantity() {
  if (quantity === 0) {
    return;
  } else {
    quantity--;
  }
}

function increaseQuantity() {
  if (quantity === 99) {
    return;
  } else {
    quantity++;
  }
}

function renderQuantityAmount() {
  quantityAmountEl.textContent = quantity;
}

cartEl.addEventListener("click", () => {
  cartCardEl.style.display = "block";
});
