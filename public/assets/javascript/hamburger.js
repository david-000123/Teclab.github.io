const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-hamburger");
const nav_right_display_none = document.getElementById("nav-right-display-none");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll("#nav-hamburger a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});
 
  document.getElementById("nav-hamburger").addEventListener("click", () => {
  document.getElementById("nav-hamburger").classList.remove("active");
  document.body.classList.remove("no-scroll");
  document.getElementById("hamburger").classList.remove("open");
});

 

