let navBar = document.querySelector(".navbar-toggle");
let navBarMenu = document.querySelector(".navbar-menu");


navBar.addEventListener("click", function(){
    navBar.classList.toggle("active");
    navBarMenu.classList.toggle("is-active");
})
