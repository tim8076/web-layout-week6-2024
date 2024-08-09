// header sticky padding-y
const headerContainer = document.querySelector("[data-header-container]");
document.addEventListener("scroll", () => {
  if (window.scrollY > 240) {
    headerContainer.classList.remove("lg:py-9");
    headerContainer.classList.add("lg:py-4");
  } else if (window.scrollY < 120) {
    headerContainer.classList.add("lg:py-9");
    headerContainer.classList.remove("lg:py-4");
  }
});
// menu toggle
const menuBtn = document.querySelector("[data-hamburgur-btn]");
const closeBtn = document.querySelector("[data-close-menu-btn]");
const menuList = document.querySelector("[data-nav-list]");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("overflow-y-hidden");
  closeBtn.classList.remove("hidden");
  closeBtn.classList.add("block");
  menuBtn.classList.add("hidden");
  menuBtn.classList.remove("block");
  menuList.classList.remove("hidden");
  menuList.classList.add("block");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("overflow-y-hidden");
  closeBtn.classList.remove("block");
  closeBtn.classList.add("hidden");
  menuBtn.classList.add("block");
  menuBtn.classList.remove("hidden");
  menuList.classList.remove("block");
  menuList.classList.add("hidden");
});
