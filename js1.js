const hamburguesa = document.querySelector(".hamburguesa");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const slide = document.querySelectorAll(".carrusel")

hamburguesa.addEventListener("click", () => {
    navLinks.classList.toggle("open");
}); slide.classList.toggle("oculto");