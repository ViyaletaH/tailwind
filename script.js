import { cards } from "./data/cards.js";
import { projects } from "./data/projects.js";
import { sliderCards } from "./data/sliderCards.js";

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
      icon.style.backgroundImage = cards[i].img;

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
  const contactFooter = document.getElementById("contact__footer");
  const contactHeader = document.getElementById("contact__header");
  const email = document.getElementById("email");
  const contactBtn = document.getElementById("contact");
  const searchInput = document.getElementById("search__input");
  const searchIcon = document.getElementById("search__icon");
  const navSearch = document.getElementById("nav__search");
  const nav = document.getElementById("nav");
  const project = document.querySelector(".project__card");
  const section = document.querySelector(".projects__section");
  const wrapper = document.querySelector(".wrapper");
  const openProjects = document.getElementById("ghost__button__dark");
  const light = document.querySelector(".projects__light");
  const project7 = document.getElementById("project7");
  const project3 = document.getElementById("project3");
  const project11 = document.getElementById("project11");

  openProjects.onclick = () => {
    project7.style.height = "272px";
    project3.style.height = "482px";
    project11.style.height = "482px";
    project11.style.marginBottom = "15rem";
    light.style.visibility = "hidden";
  };

  project.addEventListener("click", () => {
    const cardOpen = document.createElement("div");
    cardOpen.classList.add("cardOpen");
    cardOpen.innerHTML = project.innerHTML;
    section.appendChild(cardOpen);

    const name = document.createElement("span");
    name.classList.add("project__name");
    cardOpen.appendChild(name);
    name.innerHTML = projects[i].name;

    if (section.contains(cardOpen)) {
      const darkenedCover = document.createElement("div");
      darkenedCover.classList.add("darkenedCover");
      wrapper.appendChild(darkenedCover);

      darkenedCover.addEventListener("click", () => {
        wrapper.removeChild(darkenedCover);
        section.removeChild(cardOpen);
      });
    }
  });

  const broadenSearch = () => {
    searchInput.classList.toggle("wide");
    navSearch.classList.toggle("between");
    nav.classList.toggle("slide");
  };
  searchIcon.addEventListener("click", broadenSearch);

  logo.addEventListener("click", () => linkOpen("https://adrespect.pl/"));
  inst.addEventListener("click", () => linkOpen("https://www.instagram.com/"));
  real.addEventListener("click", () => linkOpen("https://www.instagram.com/"));
  visual.addEventListener("click", () =>
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
});

(function () {
  const container = document.querySelector(".projects");

  function loadProjects(projects) {
    for (let i = 0; i < projects.length; i++) {
      const project = document.createElement("div");
      project.classList.add("project__card");
      project.id = `project${projects[i].number}`;
      container.appendChild(project);
      project.style.backgroundImage = projects[i].picture;

      project.addEventListener("click", () => {
        const cardOpen = document.createElement("div");
        cardOpen.classList.add("cardOpen");
        cardOpen.style.backgroundImage = project.style.backgroundImage;
        const main = document.getElementById("wrapper");
        main.appendChild(cardOpen);
        main.style.justifyContent = "center";
        main.style.alignItems = "center";

        const left = document.createElement("span");
        left.classList.add("left__modal");
        left.innerHTML = "⮜";
        cardOpen.appendChild(left);

        const right = document.createElement("span");
        right.classList.add("right__modal");
        right.innerHTML = "⮞";
        cardOpen.appendChild(right);

        let currentIndex = i;

        right.onclick = () => {
          currentIndex = (currentIndex + 1) % projects.length;
          cardOpen.style.backgroundImage = projects[currentIndex].picture;
        };

        left.onclick = () => {
          currentIndex = (currentIndex - 1 + projects.length) % projects.length;
          cardOpen.style.backgroundImage = projects[currentIndex].picture;
        };

        if (main.contains(cardOpen)) {
          const darkenedCover = document.createElement("div");
          darkenedCover.classList.add("darkenedCover");
          main.appendChild(darkenedCover);

          darkenedCover.addEventListener("click", () => {
            main.removeChild(darkenedCover);
            main.removeChild(cardOpen);
            main.style.justifyContent = "";
            main.style.alignItems = "";
          });
        }
      });
    }
  }
  loadProjects(projects);
})();

const offerProjectBtn = document.getElementById("0");
const navAbout = document.getElementById("nav__about");
const navProjects = document.getElementById("nav__projects");
const navContact = document.getElementById("nav__contact");
const mainProjects = document.getElementById("main__projects");

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Element with ID '${sectionId}' not found.`);
  }
}

offerProjectBtn.addEventListener("click", () => scrollToSection("projects"));

mainProjects.addEventListener("click", () => scrollToSection("projects"));

navAbout.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("about__section");
});
navContact.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("contact__section");
});

navProjects.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("projects");
});

const offerSelect = document.getElementById("offer");

offerSelect.addEventListener("change", () => {
  const selectedValue = offerSelect.value;
  if (selectedValue === "visualization" || selectedValue === "realization") {
    window.location.href = "https://www.instagram.com/";
  } else if (selectedValue === "projects__section") {
    scrollToSection("projects");
  }
});

const phone = document.getElementById("phone");

phone.addEventListener("click", () => {
  const phoneNumber = phone.innerHTML.match(/\d+/)[0];
  window.location.href = `tel:${phoneNumber}`;
});

const header = document.getElementById("h1");
const text = document.getElementById("slider__text");
const picture = document.getElementById("slider__right__part");
const leftArr = document.getElementById("left__arrow");
const rightArr = document.getElementById("right__arrow");

function addTransition () {
  picture.classList.add("fade-transition");
  text.classList.add("fade-transition");
  header.classList.add("fade-transition");
  setTimeout(() => {
    picture.classList.remove("fade-transition");
    text.classList.remove("fade-transition");
    header.classList.remove("fade-transition");
  }, 700);
}

function loadSlider(cards) {
  let currentIndex = 0;

  rightArr.onclick = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    picture.style.backgroundImage = cards[currentIndex].picture;
    text.innerHTML = cards[currentIndex].text;
    header.innerHTML = cards[currentIndex].name;
    addTransition();
  };

  leftArr.onclick = () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    picture.style.backgroundImage = cards[currentIndex].picture;
    text.innerHTML = cards[currentIndex].text;
    header.innerHTML = cards[currentIndex].name;
    picture.classList.remove("fade-transition");
    text.classList.remove("fade-transition");
    header.classList.remove("fade-transition");
    addTransition();
  };

  header.innerHTML = cards[0].name;
  picture.style.backgroundImage = cards[0].picture;
  text.innerHTML = cards[0].text;
}

loadSlider(sliderCards);
