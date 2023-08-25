//Stiky
window.onscroll = function showHeader() {
  const header = document.querySelector(".header-section");
  // const container = document.querySelector(".hero-section");
  // const headerWrap = document.querySelector(".header-wrap");
  if (window.pageYOffset > 0) {
    header.classList.add("header_fixed");
    //   container.classList.add("container_fixed");
    //   headerWrap.classList.add("new-padding");
  } else {
    header.classList.remove("header_fixed");
    //   container.classList.remove("container_fixed");
    //   headerWrap.classList.remove("new-padding");
  }
};

// All animations will take exactly 500ms
// var scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 500,
//   speedAsDuration: true,
//   offset: 50,
// });
