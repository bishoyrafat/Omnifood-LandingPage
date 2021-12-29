const btn = document.querySelector(".nav-state");
const header = document.querySelector(".header");

btn.addEventListener("click", () => header.classList.toggle("nav-open"));
