const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
  burger.addEventListener("click", () => nav.classList.toggle("nav--open"));
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("nav--open"));
  });
}
