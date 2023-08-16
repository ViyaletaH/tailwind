import { cards } from "./data/cards";
import { projects } from "./data/projects";
import Masonry from 'masonry-layout';

(function() {
    const container = document.querySelector('.cards__cont');

    function loadCards(cards) {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement("div");
            card.classList.add("card");
            container.appendChild(card);

            const icon = document.createElement("div");
            icon.classList.add("card__icon");
            card.appendChild(icon);
            icon.style.backgroundImage = `url(${cards[i].img})`; 

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
            card.appendChild(button);
            button.innerHTML = cards[i].button;

            const buttonArrow = document.createElement("div");
            buttonArrow.classList.add("btn__arrow");
            button.appendChild(buttonArrow);
            buttonArrow.style.backgroundImage = `url(${cards[i].arrow})`;
        }
    }
    loadCards(cards);
})();

(function() {
    const container = document.querySelector('.projects');

    function loadProjects(projects) {
        for (let i = 0; i < projects.length; i++) {
            const project = document.createElement("div");
            project.classList.add("project__card");
            container.appendChild(project);
            project.style.backgroundImage = `url(${projects[i].img})`; 

            const name = document.createElement("span");
            name.classList.add("project__name");
            project.appendChild(name);
            name.innerHTML = projects[i].name;
        }
        const masonry = new Masonry(container, {
            itemSelector: '.project__card',
            columnWidth: '.project__card',
            gutter: 10,
        });
    }
    loadProjects(projects);
})();