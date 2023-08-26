import '../css/Deck.css';
import Card from './Card.js';
import { useState } from 'react';
import classNames from 'classnames';
import TypeWriterEffect from "react-typewriter-effect";
import * as deck from './cards.json';

const allCards = deck;
let cardArray;
cardArray = allCards.cards;
let threeCards;

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

threeCards = pickSpread();

const Deck = ({ onRotate }) => {
  const [spread, setSpread] = useState(false);

  const text = { __html: `<p>Welcome. Please consider your intention for this
    reading. When you're ready, click here to begin.</p>` };

  const handleStackClick = () => {
    if (!spread) {
      setSpread(true);
    }
  }

  const handleRestartClick = () => {
    setSpread(false);
  }

  const desktopStackClass = classNames('cards', 'desktop', { 'spread': spread });
  const mobileStackClass = classNames('cards', 'mobile', { 'spread': spread });
  const instructionClass = classNames('welcome-text', {'spread': spread});

  const cards = () => {
    let cardSpread = [];

    for (let i = 0; i < 3; i++) {
      cardSpread.push(<Card key={i} id={i} data={threeCards[i]} spread={spread} />);
    }

    return cardSpread;
  };

  let chosenCards = cards();

  return (
    <div className="deck-wrapper">
      <div className={desktopStackClass} onClick={handleStackClick}>
        {chosenCards}
      </div>
      <div className={mobileStackClass} onClick={handleStackClick}>
        {chosenCards}
      </div>
      <div className={instructionClass}>
        <TypeWriterEffect
          textStyle={{
            fontFamily: 'Roboto',
            color: '#f2f2f2',
            fontSize: '21px',
            textAlign: 'center'
          }}
          startDelay={1000}
          cursorColor="white"
          multiText={[
            'Welcome.',
            'Please consider your intention for this reading.',
            'When you\'re ready, click the card stack to begin.'
          ]}
          multiTextDelay={2000}
          typeSpeed={100}
        />
      </div>
      {spread &&
        <div className="restart-text"
          dangerouslySetInnerHTML = { { __html: `<p>${"start over"}</p>`} } onClick={handleRestartClick}  />
      }
    </div>
  )
}

export default Deck;
