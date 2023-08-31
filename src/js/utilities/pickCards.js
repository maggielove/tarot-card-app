import * as deck from '../cards.json';
import reject from "lodash/reject";

const allCards = deck;
let cardArray = allCards.cards;

const getRandomIndex = (array) => {
    let maxIndex = array.length;

    //choose a card at random
    return Math.floor(Math.random() * maxIndex);
}

// randomly select card content to display
const pickACard = () => {
    let randomIndex = getRandomIndex(cardArray);
    let chosenCard = cardArray[randomIndex];

    // remove the chosenCard from the virtual deck
    cardArray = reject(cardArray, chosenCard);

    return chosenCard;
}

const pickSpread = () => {
  let threeCards = [];

  for (let i = 0; i < 3; i++) {
    const card = pickACard();
    threeCards.push(card);
  }

  cardArray = allCards.cards; // reset the deck for when user starts over

  return new Promise((resolve) => {
    resolve(threeCards);
  });
}

export default pickSpread;
