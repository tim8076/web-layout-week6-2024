const subButton = document.querySelector("[data-subscribe-btn]");
const subContent = document.querySelector("[data-subscribe-content]");
const subMask = document.querySelector("[data-sub-mask]");
const subText = document.querySelector("[data-sub-text]");
const previewContent = document.querySelector("[data-preview-content]");

subButton.addEventListener("click", (e) => {
  e.preventDefault();
  subContent.classList.toggle("hidden");
  subMask.classList.toggle("hidden");
  subText.classList.toggle("hidden");
});
