const navbarBurger = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarButton = document.querySelector(".navbar-btn");

navbarBurger.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
  navbarButton.classList.toggle("open");
});
