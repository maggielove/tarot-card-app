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
    console.log(`clicked stack - spread: `, spread);
  }

  const handlePromptClick = () => {
    console.log(`clicked welcome txt`);
    // add class to animate deck
    // could make it a promise, so that when the animation is complete, it calls onRotate
    // or i could move all card logic to the same component, either deck or app...?
  }

  const desktopStackClass = classNames('cards', 'desktop', { 'spread': spread });
  const mobileStackClass = classNames('cards', 'mobile', { 'spread': spread });
  const instructionClass = classNames('welcome-text', {'spread': spread});

  // TODO change divs back to Card components
  // pass data for card, plus card # for transition
  // const cards = (
  //   <>
  //     <div className="card card-1"/>
  //     <div className="card card-2"/>
  //     <div className="card card-3" />
  //   </>
  // );

  // console.log(`card?? `, pickACard());
  const cards = () => {
    let cardSpread = [];

    for (let i = 0; i < 3; i++) {
      cardSpread.push(<Card key={i} id={i} data={threeCards[i]} />);
    }

    return cardSpread;
  };

  let chosenCards = cards();

  // TODO add back mobile version
  return (
    <div className="deck-wrapper">
      <div className={desktopStackClass} onClick={handleStackClick}>
        {chosenCards}
      </div>
      <div className={mobileStackClass} onClick={handleStackClick}>
        {chosenCards}
      </div>
      <div className={instructionClass} onClick={handlePromptClick}>
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
    </div>
  )
}

export default Deck;
