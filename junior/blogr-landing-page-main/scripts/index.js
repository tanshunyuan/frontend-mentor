const navbarLinks = document.querySelectorAll(".navbar-link");
const navbarDropdowns = document.querySelectorAll(".navbar-dropdown");
const navbarBurger = document.querySelector(".navbar-burger");
const navbarButton = document.querySelector(".navbar-button");
const navbarMenu = document.querySelector(".navbar-menu");
const arrows = document.querySelectorAll(".arrow");
navbarLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    navbarDropdowns[index].classList.toggle("show");
    arrows[index].classList.toggle("rotate-180");
  });
});
navbarBurger.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
  navbarButton.classList.toggle("open");
});
