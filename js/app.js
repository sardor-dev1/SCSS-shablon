let menu = document.querySelector(".header__hamburger");
let navBar = document.querySelector(".header__list");

menu.addEventListener("click",function () {
  navBar.classList.toggle("header__show-list")
})
