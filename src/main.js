import "./style.css";
import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";
import { Beneficios } from "./components/Beneficios.js";
import { Faixa } from "./components/Faixa.js";
import { Unidades } from "./components/Unidades.js";
import { Galeria } from "./components/Galeria.js";
import { Diferenciais } from "./components/Diferenciais.js";
import { Localizacao } from "./components/Localizacao.js";
import { Depoimentos } from "./components/Depoimentos.js";
import { CTA } from "./components/CTA.js";
import { Footer } from "./components/Footer.js";
import { WhatsApp } from "./components/WhatsApp.js";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${Beneficios()}
  ${Faixa()}
  ${Unidades()}
  ${Galeria()}
  ${Diferenciais()}
  ${Localizacao()}
  ${Depoimentos()}
  ${CTA()}
  ${Footer()}
  ${WhatsApp()}
`;

// Navbar scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar--scrolled");
  } else {
    navbar.classList.remove("navbar--scrolled");
  }
});

// Mobile menu
document.addEventListener("click", (e) => {
  if (e.target.closest("#navbar-toggle")) {
    const menu = document.getElementById("navbar-menu");
    const toggle = document.getElementById("navbar-toggle");
    menu.classList.toggle("navbar__menu--open");
    toggle.classList.toggle("navbar__toggle--active");
  }
  if (!e.target.closest(".navbar") && document.getElementById("navbar-menu").classList.contains("navbar__menu--open")) {
    document.getElementById("navbar-menu").classList.remove("navbar__menu--open");
    document.getElementById("navbar-toggle").classList.remove("navbar__toggle--active");
  }
});

// Smooth scroll
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      document.getElementById("navbar-menu").classList.remove("navbar__menu--open");
      document.getElementById("navbar-toggle").classList.remove("navbar__toggle--active");
    }
  }
});