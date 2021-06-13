const shareBtn = document.querySelector(".share-btn");
const shareContainer = document.querySelector(".share-tooltip");
shareBtn.addEventListener("click", () => {
  shareContainer.classList.toggle("show");
});
