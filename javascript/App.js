let myNav = document.querySelector(".nav-bg");
let myNav2 = document.querySelector(".nav-bg nav");

// Variable to store the current state
var state = false;

// Add an event listener to the button for the "click" event
myNav.addEventListener("click", function() {
  // Change the state
  state = !state;

  // Apply state through a CSS class
  if (state) {
    console.log("Active");
    myNav.classList.add("no-collapse-menu");
    myNav2.classList.remove("collapse-menu");
    myNav.style.height = "unset";

  } else {
    console.log("Desactive");
    myNav.classList.remove("no-collapse-menu");
    myNav2.classList.add("collapse-menu");
    myNav.style.height = "4.4rem";
  }
});



