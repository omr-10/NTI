const toggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".menu ul");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
