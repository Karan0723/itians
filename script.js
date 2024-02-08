// Counter

$(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

// Counter End

// Navbar Fixed
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      document.getElementById("navbar_top").classList.add("fixed-top");
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
    }
  });
});

// Navbar End

// Navbar slide

let parentUl = document.querySelector(".parent_ul");
let bars = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");
let navbar_top = document.querySelector("#navbar_top");

function openNavbar() {
  parentUl.style.transform = "translateX(0px)";
  xmark.style.visibility = "visible";
  bars.style.visibility = "hidden";
  navbar_top.style.height = "fit-content";
}

function closeNavbar() {
  parentUl.style.transform = "translateY(-280px)";
  xmark.style.visibility = "hidden";
  bars.style.visibility = "visible";
  navbar_top.style.height = "54px";
}

// Navbar slide
