const menu = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");

const menuIconChange = () => {
  menu.firstElementChild.attributes[0].textContent =
    menu.firstElementChild.dataset.close;

  if (!navList.classList.contains("menu__toggle"))
    menu.firstElementChild.attributes[0].textContent =
      "./images/icon-hamburger.svg";
};

const menuTogglingFunc = (e) => {
  if (e.target.classList.contains("nav__menu")) {
    navList.classList.toggle("menu__toggle");
    menuIconChange();
  }
};
nav.addEventListener("click", menuTogglingFunc);
