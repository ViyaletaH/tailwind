import { cards } from "./data/cards.js";
import { projects } from "./data/projects.js";

(function () {
  const container = document.querySelector(".cards__cont");

  function loadCards(cards) {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      container.appendChild(card);

      const icon = document.createElement("div");
      icon.classList.add("card__icon");
      card.appendChild(icon);
      icon.style.backgroundImage = cards[i];

      const name = document.createElement("span");
      name.classList.add("card__name");
      card.appendChild(name);
      name.innerHTML = cards[i].name;

      const text = document.createElement("p");
      text.classList.add("card__text");
      card.appendChild(text);
      text.innerHTML = cards[i].text;

      const button = document.createElement("div");
      button.classList.add("card__button");
      button.setAttribute("id", cards[i].id);
      card.appendChild(button);
      button.innerHTML = cards[i].button;

      const buttonArrow = document.createElement("div");
      buttonArrow.classList.add("btn__arrow");
      button.appendChild(buttonArrow);
      buttonArrow.style.backgroundImage = cards[i].arrow;
    }
  }
  loadCards(cards);
})();

const linkOpen = (link) => {
  window.open(link);
};

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const inst = document.getElementById("inst__btn");
  const visual = document.getElementById("1");
  const real = document.getElementById("2");
  const dropVisual = document.getElementById("1");
  const dropReal = document.getElementById("dropdown__realizations");
  const contactFooter = document.getElementById("contact__footer");
  const contactHeader = document.getElementById("contact__header");
  const email = document.getElementById("email");
  const contactBtn = document.getElementById("contact__button");
  const offerProjectBtn = document.getElementById("0");
  const dropProjects = document.getElementById("dropdown__to__projects");
  const navAbout = document.getElementById("nav__about");
  const navProjects = document.getElementById("nav__projects");
  const navContact = document.getElementById("nav__contact");
  const mainProjects = document.getElementById("main__projects");

  logo.addEventListener("click", () => linkOpen("https://adrespect.pl/"));
  inst.addEventListener("click", () => linkOpen("https://www.instagram.com/"));
  real.addEventListener("click", () => linkOpen("https://www.instagram.com/"));
  visual.addEventListener("click", () =>
    linkOpen("https://www.instagram.com/")
  );
  dropReal.addEventListener("click", () =>
    linkOpen("https://www.instagram.com/")
  );
  dropVisual.addEventListener("click", () =>
    linkOpen("https://www.instagram.com/")
  );

  function openEmail() {
    const mailtoLink = "mailto:";
    window.location.href = mailtoLink;
  }

  email.addEventListener("click", () => openEmail());
  contactHeader.addEventListener("click", () => openEmail());
  contactFooter.addEventListener("click", () => openEmail());
  contactBtn.addEventListener("click", () => openEmail());

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  offerProjectBtn.addEventListener("click", () =>
    scrollToSection("projects__section")
  );
  dropProjects.addEventListener("click", () =>
    scrollToSection("projects__section")
  );
  navProjects.addEventListener("click", () =>
    scrollToSection("projects__section")
  );
  mainProjects.addEventListener("click", () =>
    scrollToSection("projects__section")
  );

  navAbout.addEventListener("click", () => scrollToSection("about__section"));
  navContact.addEventListener("click", () =>
    scrollToSection("contact__section")
  );
});

(function () {
  const container = document.querySelector(".projects");

  function loadProjects(projects) {
    for (let i = 0; i < projects.length; i++) {
      const project = document.createElement("div");
      project.classList.add("project__card");
      container.appendChild(project);
      project.style.backgroundImage = projects[i].picture;

      const name = document.createElement("span");
      name.classList.add("project__name");
      project.appendChild(name);
      name.innerHTML = projects[i].name;
    }
  }
  loadProjects(projects);
})();
