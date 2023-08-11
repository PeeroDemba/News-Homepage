"use strict";

const menu = document.getElementById("menu");
const close = document.getElementById("close");
const toggle = document.getElementById("toggle");
const overlay = document.getElementById("overlay");
const f2 = document.getElementsByClassName("flex2")[0];
const g2 = document.getElementsByClassName("grid2")[0];
const footer = document.getElementsByTagName("footer")[0];

function menuopen(event) {
  toggle.style.display = "block";
  overlay.style.display = "block";
  f2.style.display = "none";
  g2.style.display = "none";
  footer.style.display = "none";
}

function menuclose(event) {
  toggle.style.display = "none";
  overlay.style.display = "none";
  f2.style.display = "block";
  g2.style.display = "grid";
  footer.style.display = "block";
}

menu.addEventListener("click", menuopen);
close.addEventListener("click", menuclose);

let mq = window.matchMedia("(max-width: 767px)");
window.addEventListener("resize", function () {
  if (!mq.matches) {
    f2.style.display = "block";
    g2.style.display = "grid";
    footer.style.display = "block";
    toggle.style.display = "none";
    overlay.style.display = "none";
  }
});
