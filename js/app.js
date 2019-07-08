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

let aniOffset = 0;
const sectionAni = document.querySelector(".ani-static");
const sectionAni1 = document.querySelector(".ani-static1");
const sectionAni2 = document.querySelector(".ani-static2");
const aniHeight = 300;

const animate = () => {
  const offset = window.scrollY || window.pageYOffset;

  if (offset > aniHeight) {
    if (offset > aniOffset) {
      sectionAni.classList.add("AM-ani");
      sectionAni1.classList.add("S-ani");
      sectionAni2.classList.add("P-ani");
    } else {
      sectionAni.classList.remove("AM-ani");
      sectionAni1.classList.remove("S-ani");
      sectionAni2.classList.remove("P-ani");
    }
    aniOffset = aniHeight;
  }
};

window.addEventListener("scroll", animate, false);

document.addEventListener("DOMContentLoaded", function(e) {
  document.body.className = "";
});
