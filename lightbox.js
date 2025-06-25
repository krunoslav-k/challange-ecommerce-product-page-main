const lightboxEl = document.createElement("div");
lightboxEl.classList.add("lightbox");
document.body.append(lightboxEl);

const lightboxMainImage = document.createElement("img");
const lightboxMainImageWrapper = document.createElement("div");
lightboxMainImageWrapper.classList.add("lightbox-main-image-wrapper");
const lightboxThumbnailsWrapper = document.createElement("div");
lightboxThumbnailsWrapper.classList.add("thumbnails-wrapper");
const lightboxThumbnailWrappers = [];
const lightboxThumbnails = [];
const closeButton = document.createElement("img");
const previousButtonWrapper = document.createElement("div");
const previousButton = document.createElement("img");
const nextButtonWrapper = document.createElement("div");
const nextButton = document.createElement("img");
const lightboxThumbnailSelectionEl = document.createElement("div");
lightboxThumbnailSelectionEl.classList.add("selected-thumbnail");

mainImage.addEventListener("click", () => {
  lightboxEl.classList.add("active");
  renderMainImage();
  renderButtons();
  renderThumbnails();
});

lightboxEl.addEventListener("click", (e) => {
  if (e.target !== lightboxEl) {
    return;
  } else {
    closeLightbox();
  }
});

closeButton.addEventListener("click", () => {
  closeLightbox();
});

thumbnailEls.forEach((thumbnailEl) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("thumbnail-wrapper");

  const img = document.createElement("img");
  img.classList.add("thumbnail");
  img.src = thumbnailEl.src;
  const imgSrcToFullImage = thumbnailEl.getAttribute("srcToFullImage");
  img.setAttribute("srcToFullImage", imgSrcToFullImage);
  lightboxThumbnails.push(img);

  wrapper.append(img);
  lightboxThumbnailWrappers.push(wrapper);
});

function closeLightbox() {
  lightboxEl.classList.remove("active");
  lightboxMainImage.remove();
  lightboxThumbnailsWrapper.remove();
  closeButton.remove();
  previousButtonWrapper.remove();
  nextButtonWrapper.remove();
  lightboxThumbnailSelectionEl.remove();
}

function renderMainImage() {
  lightboxMainImage.src = mainImage.src;
  lightboxMainImage.classList.add("lightbox-main-image");
  lightboxMainImageWrapper.append(lightboxMainImage);
  lightboxEl.append(lightboxMainImageWrapper);
}

function renderButtons() {
  closeButton.classList.add("lightbox-close-button");
  closeButton.src = "./images/icon-close.svg";
  lightboxMainImage.before(closeButton);

  previousButton.classList.add("lightbox-previous-button");
  previousButton.src = "./images/icon-previous.svg";
  previousButtonWrapper.classList.add("lightbox-previous-button-wrapper");
  previousButtonWrapper.append(previousButton);
  lightboxMainImage.before(previousButtonWrapper);

  nextButton.classList.add("lightbox-next-button");
  nextButton.src = "./images/icon-next.svg";
  nextButtonWrapper.classList.add("lightbox-next-button-wrapper");
  nextButtonWrapper.append(nextButton);
  lightboxMainImage.after(nextButtonWrapper);
}

function renderThumbnails() {
  renderSelectedThumbnail();
  lightboxThumbnailWrappers.forEach((thumbnailWrapper) => {
    lightboxThumbnailsWrapper.append(thumbnailWrapper);
  });
  lightboxMainImageWrapper.after(lightboxThumbnailsWrapper);
}

function renderSelectedThumbnail() {
  const baseURL = window.location.origin;
  const selectedThumbnail = lightboxThumbnails.find((el) => {
    const relativePath = el.getAttribute("srcToFullImage");
    const absoluteURL = new URL(relativePath, baseURL).href;
    return absoluteURL === mainImage.src;
  });

  selectedThumbnail.after(lightboxThumbnailSelectionEl);
}
