AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

var currentPageUrl = window.location.href;

// Check if the current page URL matches the URL of the "Home" link
if (currentPageUrl.endsWith("index.html") || currentPageUrl.endsWith("/")) {
  // Add the 'active' class to the 'nav-link' element of the "Home" link
  document
    .querySelector('.navbar-nav .nav-link[href="index.html"]')
    .classList.add("active");
}

// document.querySelector(".menu-toggle").addEventListener("click", () => {
//   document.querySelector(".navbar-nav").classList.toggle("active");
// });
