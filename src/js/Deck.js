import '../css/Deck.css';
import Card from './Card.js';
import { useState, useEffect, useCallback, useRef } from 'react';
import classNames from 'classnames';
import TypeWriterEffect from "react-typewriter-effect";
import without from "lodash/without";
import filter from "lodash/filter";
import find from "lodash/find";
import reject from "lodash/reject";

import * as deck from './cards.json';

// Test-- two diff arrays
// import pickSpread from "./utilities/pickCards.js";

const getRandomIndex = (arr) => {
    // TODO fix import to use default...
    let maxIndex = arr.length + 1;

    // console.log(`to return `, Math.floor(Math.random() * maxIndex));

    //choose a card at random
    return Math.floor(Math.random() * maxIndex);
}

// let threeCards = pickSpread();

const Deck = () => {
  let allCards = deck;
  // let threeCards = []; // combine with cardSpread;
  const dummyCards = ([
    {
      "name": "IV of Cups",
      "arcana": "Minor",
      "suit": "Cups",
      "description": "New invitations and opportunities are flowing to you,but for now, you’re saying “no” and turning them away. Perhaps the prospects do not interest you, or your cup is full, or you already have too much on your plate. Use your discernment to decide on what is truly important to you.",
      "image": "images/4-of-cups.png"
    },
    {
      "name": "VI of Swords",
      "arcana": "Minor",
      "suit": "Swords",
      "description": "You are in a state of transition, leaving behind what was familiar and moving towards the unknown. The sadness over what you have lost (or released) will soon be replaced by greater mental clarity and a renewed acceptance of change. You will become a better person as a result.",
      "image": "images/6-of-swords.png"
    },
    {
      "name": "III of Cups",
      "arcana": "Minor",
      "suit": "Cups",
      "description": "Celebration, friendship, sisterhood, and creative collaborations. Your friends and family are here to support you and lift you up to even higher levels of success. Celebrate with them and enjoy their camaraderie.",
      "image": "images/3-of-cups.png"
    }
  ]); // show stack before data loads

  const [cardArray, setCardArray] = useState(allCards.cards);

  const [spread, setSpread] = useState(false);
  const [prevSpread, setPrevSpread] = useState(spread);
  // let originalCards = pickSpread();
  const [cardSpread, setCardSpread] = useState(dummyCards); // move to componentdidmount

  useEffect(() => {
    let cardArrayCopy = cardArray;
    let randomIndex = getRandomIndex(cardArrayCopy);

    // TODO simplify
    let randomIndex2;
    let randomIndex3;

    if (randomIndex >= cardArray.length - 1) {
      randomIndex2 = randomIndex - 1;
      randomIndex3 = randomIndex - 2;
    } else if (randomIndex <= 0) {
      randomIndex2 = randomIndex + 1;
      randomIndex3 = randomIndex + 2;
    } else {
      randomIndex2 = randomIndex + 1;
      randomIndex3 = randomIndex - 1;
    }

    console.log('ri1', randomIndex, 'ri2 ', randomIndex2, 'ri3', randomIndex3);

    setCardSpread([cardArray[randomIndex], cardArray[randomIndex2], cardArray[randomIndex3]]);
  }, [spread, cardArray]);

  const handleStackClick = () => {
    if (!spread) {
      setSpread(true);
      // console.log(`cardSpread after stack click! `, cardSpread);
    }
  }

  const handleRestartClick = () => {
    setSpread(false);
    // threeCards = [];
    // setThreeCards([]);

    // if (prevSpread !== spread) {
    //   const newCards = pickSpread();
    //   setPrevSpread(spread);
    //   setCardSpread(newCards);
    // }

    // console.log(`cards after restart `, cardSpread);

    // return cardSpread;
  }

  const desktopStackClass = classNames('cards', 'desktop', { 'spread': spread });
  const mobileStackClass = classNames('cards', 'mobile', { 'spread': spread });
  const instructionClass = classNames('welcome-text', {'spread': spread});

  // console.log(`cards at render `, cardSpread);

  return (
    <div className="deck-wrapper">
      <div className="title" dangerouslySetInnerHTML = { { __html:
        `<h1>${`Tarot`}&nbsp;&nbsp;${`Reading`}</h1>`} } />
      <div className={desktopStackClass} onClick={handleStackClick}>
        { cardSpread &&
        cardSpread.map((card, i) =>
          <Card key={i} id={i} data={card} spread={spread} />) }
      </div>
      {/* <div className={mobileStackClass} onClick={handleStackClick}>
        {readingCards}
      </div> */}
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
