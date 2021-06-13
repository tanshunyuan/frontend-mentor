const shareBtn = document.querySelector(".share");
const shareContainer = document.querySelector(".share-container");
shareBtn.addEventListener("click", () => {
  shareContainer.classList.toggle("show");
});
