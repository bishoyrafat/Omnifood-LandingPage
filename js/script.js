// Dynamic Navigation Bar
const btn = document.querySelector(".nav-state");
const header = document.querySelector(".header");
btn.addEventListener("click", () => header.classList.toggle("nav-open"));

// Hide Navigation Bar
const linksEl = Array.from(document.getElementsByTagName("a"));
linksEl.forEach((link) => {
  link.addEventListener("click", (e) => {
    const linkAtt = link.classList.contains("nav-link");
    header.classList.toggle("nav-open");
  });
});

/// Sticky Navigation Bar
const heroSection = document.querySelector(".section-hero");
let options = {
  root: null,
  rootMargin: "",
  threshold: 0,
};
const callback = (entries) => {
  console.log(entries[0]);
  if (entries[0].isIntersecting === false) {
    header.classList.add("sticky");
  }
  if (entries[0].isIntersecting) {
    header.classList.remove("sticky");
  }
};

let observer = new IntersectionObserver(callback, options);
observer.observe(heroSection);
