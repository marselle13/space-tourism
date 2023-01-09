"use strict";
const modal = document.getElementById("defaultModal");
const burger = document.getElementById("burger");
const close = document.getElementById("close");
const start = document.querySelector(".start");
const planets = document.querySelectorAll(".planet");
const image = document.getElementById("image");
const planetName = document.getElementById("name");
const description = document.getElementById("description");
const time = document.getElementById("time");
const distance = document.getElementById("distance");

burger.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

close.addEventListener("click", function () {
  modal.classList.add("hidden");
});

if (location.href === "http://127.0.0.1:5500/src/index.html") {
  start.addEventListener("click", function () {
    location.href = "destination.html";
  });
}

fetch("../../data.json")
  .then((res) => res.json())
  .then((data) => {
    data.destinations.forEach((info) => {
      planets.forEach((planet) =>
        planet.addEventListener("click", function () {
          const planetValue = planet.innerHTML.trim();
          planets.forEach((planet) => {
            planet.classList.remove("border-b-[3px]", "border-white");
          });
          planet.classList.add("border-b-[3px]", "border-white");
          if (info.name === planetValue) {
            image.setAttribute("src", info.images.png);
            planetName.textContent = info.name;
            description.textContent = info.description;
            distance.textContent = info.distance;
            time.textContent = info.travel;
          }
        })
      );
    });
  });
