import { cards } from "./data/cards";

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
