// Complete document JS
"use strict";

let refOffset = 0;
const animateWrapper = document.querySelector(".animate-wrapper");
const navHeight = 100;

const handler = () => {
  const newOffset = window.scrollY || window.pageYOffset;

  if (newOffset > navHeight) {
    if (newOffset > refOffset) {
      animateWrapper.classList.remove("animateIn");
      animateWrapper.classList.add("animateOut");
    } else {
      animateWrapper.classList.remove("animateOut");
      animateWrapper.classList.add("animateIn");
    }
    refOffset = newOffset;
  }
};

window.addEventListener("scroll", handler, false);

document.addEventListener("DOMContentLoaded", function(e) {
  document.body.className = "";
});
