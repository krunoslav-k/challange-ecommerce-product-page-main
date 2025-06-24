const lightboxEl = document.createElement("div");
lightboxEl.classList.add("lightbox");
document.body.append(lightboxEl);

const mainImage = document.querySelector(".main-image");
const lightboxMainImage = document.createElement("img");

mainImage.addEventListener("click", () => {
  lightboxEl.classList.add("active");
  lightboxMainImage.classList.add("lightbox-main-image");
  lightboxMainImage.src = mainImage.src;
  lightboxEl.append(lightboxMainImage);
});

lightboxEl.addEventListener("click", (e) => {
  if (e.target !== lightboxEl) {
    return;
  } else {
    lightboxEl.classList.remove("active");
    lightboxMainImage.remove();
  }
});
