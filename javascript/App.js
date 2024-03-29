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

// When I click on form text boxes

let textForm = document.querySelectorAll("input.text-form, textarea.text-form");
let fCL = document.querySelector(".form-contact legend"); // formContactLegend

  document.addEventListener("click", (event)=> { 
    console.log(event.target)
    for (let index = 0; index < textForm.length; index++) {
      if (textForm[index].classList[0] === event.target.classList[0]) {
        fCL.style.textShadow="0 0 1rem #96c6d7c2";
        fCL.style.fontSize="2rem";
      } 
      else {
        fCL.style.textShadow="unset"
        fCL.style.fontSize="1.8rem";
      }
    }
  });




