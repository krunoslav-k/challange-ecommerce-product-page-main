const mainImage = document.querySelector(".main-image");
const thumbnailEls = document.querySelectorAll(".thumbnail");
const selectedThumbnailEl = document.querySelector(".selected-thumbnail");

thumbnailEls.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    selectedThumbnailEl.remove();
    e.target.after(selectedThumbnailEl);
    mainImage.src = e.target.getAttribute("srcToFullImage");
  });
});
