// $(document).ready(function() {
 
// })

// let mobileLinks = document.querySelectorAll(".mobile-only-link");


document.querySelector("#nav-icon4").addEventListener("click",function(){
  var hamburger = document.querySelector("#nav-icon4");
  var mobileMenu = document.querySelector(".mobile-menu");
	hamburger.classList.toggle("open");
	mobileMenu.classList.toggle("menu-show");
});