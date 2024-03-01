AOS.init({
  once: true,
});

const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu-wrapper");
const burger = document.querySelector(".burger-menu");
const close = document.querySelector(".close-btn");

burgerBtn.onclick = function () {
  burgerMenu.classList.add("open");
  burger.classList.add("open-burger");
};

close.onclick = function () {
  burgerMenu.classList.remove("open");
  burger.classList.remove("open-burger");
};
