const lightboxEl = document.createElement("div");
lightboxEl.classList.add("lightbox");
document.body.append(lightboxEl);

const mainImage = document.querySelector(".main-image");
const lightboxMainImage = document.createElement("img");
const thumbnailEls = document.querySelectorAll(".thumbnail");
const lightboxThumbnails = [];

mainImage.addEventListener("click", () => {
  lightboxEl.classList.add("active");
  lightboxMainImage.classList.add("lightbox-main-image");
  lightboxMainImage.src = mainImage.src;
  lightboxEl.append(lightboxMainImage);
  renderThumbnails();
});

lightboxEl.addEventListener("click", (e) => {
  if (e.target !== lightboxEl) {
    return;
  } else {
    lightboxEl.classList.remove("active");
    lightboxMainImage.remove();
  }
});

thumbnailEls.forEach((thumbnailEl) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("thumbnail-wrapper");
  const img = document.createElement("img");
  img.classList.add("thumbnail");
  img.src = thumbnailEl.src;
  wrapper.append(img);
  lightboxThumbnails.push(wrapper);
});

// za thmbnails (mozda u neku funkciju ili vjv razdijeliti u vise funkcija)

const lightboxThumbnailsWrapper = document.createElement("div");
lightboxThumbnailsWrapper.classList.add("thumbnails-wrapper");

function renderThumbnails() {
  lightboxThumbnails.forEach((thumbnail) => {
    lightboxThumbnailsWrapper.append(thumbnail);
  });
  lightboxMainImage.after(lightboxThumbnailsWrapper);
  console.log(lightboxMainImage);
}
