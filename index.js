

function togglePopup1() {
  document.getElementById("popup-1").classList.toggle("active");

};

function togglePopup2() {
  document.getElementById("popup-2").classList.toggle("active");

};
function togglePopup3() {
  document.getElementById("popup-3").classList.toggle("active");

};

// When the user scrolls the page, execute myFunction
window.onscroll = function() {addSticky()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addSticky() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
