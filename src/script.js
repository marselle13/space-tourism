"use strict";
const modal = document.getElementById("defaultModal");
const burger = document.getElementById("burger");
const close = document.getElementById("close");
const start = document.querySelector(".start");
//destination
const planets = document.querySelectorAll(".planet");
const imageDestination = document.getElementById("image-destination");
const planetName = document.getElementById("name-destination");
const descriptionDestination = document.getElementById(
  "description-destination"
);
const timeDestination = document.getElementById("time-destination");
const distanceDestination = document.getElementById("distance-destination");
//crew
const crews = document.querySelectorAll(".crew");
const imageCrew = document.getElementById("image-crew");
const positionCrew = document.getElementById("position-crew");
const nameCrew = document.getElementById("name-crew");
const infoCrew = document.getElementById("info-crew");

burger.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

close.addEventListener("click", function () {
  modal.classList.add("hidden");
});
if (location.pathname.split("/").pop() === "index.html") {
  start.addEventListener("click", function () {
    location.href = "destination.html";
  });
}

fetch("../data.json")
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
            imageDestination.setAttribute("src", info.images.png);
            planetName.textContent = info.name;
            descriptionDestination.textContent = info.description;
            distanceDestination.textContent = info.distance;
            timeDestination.textContent = info.travel;
          }
        })
      );

      crews.forEach((crew, index) => {
        crew.addEventListener("click", function () {
          crews.forEach((crew) => {
            crew.classList.add("opacity-[0.17]");
          });
          crew.classList.remove("opacity-[0.17]");
          if (index === +crew.value) {
            imageCrew.setAttribute("src", data.crew[index].images.png);
            positionCrew.textContent = data.crew[index].role;
            nameCrew.textContent = data.crew[index].name;
            infoCrew.textContent = data.crew[index].bio;
          }
        });
      });
    });
  });
