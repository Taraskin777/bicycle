$(".slider").slick({
  dots: true,
  autoplay: true,
  adaptiveHeight: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
  
  ]
});

AOS.init();

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".base-menu");
// console.log(mainMenu)

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu");
  }
});
