let Burger = document.querySelector(".burger");
let Navbar = document.querySelector(".Nav_bar");
let Navlist = document.querySelector(".nav_list");
Burger.addEventListener("click", () => {
  Navbar.classList.toggle("h-nav-resp");
  Navlist.classList.toggle("v-nav-resp");
});
