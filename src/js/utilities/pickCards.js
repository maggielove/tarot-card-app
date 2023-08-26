import * as deck from '../cards.json';

const allCards = deck;
let cardArray;
cardArray = allCards.cards;

const getRandomIndex = () => {
    // TODO fix import to use default...
    let maxIndex = cardArray.length;

    //choose a card at random
    return Math.floor(Math.random() * maxIndex);
}

// TODO add logic to clear, reset deck
// randomly select card content to display
const pickACard = () => {
    let randomIndex = getRandomIndex();
    let chosenCard = cardArray[randomIndex];

    // remove the chosenCard from the virtual deck
    cardArray = cardArray.filter(card => card.name !== chosenCard.name);

    return chosenCard;
}

const pickSpread = () => {
  let threeCards = [];

  for (let i = 0; i < 3; i++) {
    const card = pickACard();
    threeCards.push(card);
  }

  return threeCards;
}

export default pickSpread;
