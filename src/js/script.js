"use strict";
const modal = document.getElementById("defaultModal");
const burger = document.getElementById("burger");
const close = document.getElementById("close");

burger.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

close.addEventListener("click", function () {
  modal.classList.add("hidden");
});
