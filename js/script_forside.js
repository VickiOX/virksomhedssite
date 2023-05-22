/* -------------------sticky header-------------------*/

// When the user scrolls the page, execute myFunction

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


/*-----------------------------------burgermenu-----------------------*/
window.onload = function (){

  const menu_btn = document.querySelector('.hamburger');
  const mobil_menu = document.querySelector('.mobil-nav');

  menu_btn.addEventListener('click', function () {

  menu_btn.classList.toggle('is-active');
  mobil_menu.classList.toggle('is-active');

});

}