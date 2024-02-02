let myNav = document.querySelector(".nav-bg");
let containerNav = document.querySelector(".nav-bg nav");

let menuOpenClose = document.querySelector(".nav-bg .open-close");
var state = false;

// Add an event listener to the button for the "click" event
menuOpenClose.addEventListener("click", function() {
  // Change the state
  state = !state;

  // Apply state through a CSS class
  if (state) {
    console.log("Active");
    myNav.classList.add("no-collapse-menu");
    containerNav.classList.remove("collapse-menu");
    myNav.style.height = "unset";

  } else {
    console.log("Desactive");
    myNav.classList.remove("no-collapse-menu");
    containerNav.classList.add("collapse-menu");
    myNav.style.height = "4.4rem";
  }
});



