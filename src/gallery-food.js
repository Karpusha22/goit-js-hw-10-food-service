import cardMenu from './menu-items.hbs';
import menuArrey from './menu.json'; // пути?????

const cardsMarkup = createMenuCards(menuArrey);
const menuEl = document.querySelector('.js-menu');

function createMenuCards(menuArrey) {
  return cardMenu(menuArrey);
}
menuEl.insertAdjacentHTML('beforeend', cardsMarkup);
