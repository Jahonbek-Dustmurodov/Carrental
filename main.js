var elSiteHeader = document.querySelector(".site-header");
var elMenuBtn = document.querySelector(".js-menu-btn");
var elSiteHeaderInner = document.querySelector(".site-header-inner");
var elBtn = document.querySelector(".btn");
var elDarkBtn = document.querySelector(".js-dark-btn");

var menuOpen = false; 

elMenuBtn.addEventListener("click", function(){
  if (!menuOpen) {
    elSiteHeader.classList.add("open-menu");
    elSiteHeader.classList.remove("animation");
    document.body.classList.add("unscrollbody");
  } else {
    elSiteHeader.classList.remove("open-menu");
    document.body.classList.remove("unscrollbody");
  }
  menuOpen = !menuOpen; 
});

elBtn.addEventListener("click", function() {
  elSiteHeader.classList.toggle("animation");
  if (menuOpen) {
    elSiteHeader.classList.remove("open-menu");
    document.body.classList.remove("unscrollbody");
    menuOpen = false; 
  }
});


elDarkBtn.addEventListener("click", function(){

  document.body.classList.toggle("light-mode")
  
  });
