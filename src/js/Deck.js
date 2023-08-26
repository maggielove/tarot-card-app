import '../css/Deck.css';
import Card from './Card.js';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import TypeWriterEffect from "react-typewriter-effect";
import pickSpread from "./utilities/pickCards.js";

let threeCards = pickSpread();

const Deck = () => {
  const [spread, setSpread] = useState(false);
  // const [cardSpread, setCardSpread] = useState([]);
  let cardSpread = [];

  // When user starts over, choose new cards
  useEffect(() => {
    if (!spread) {
      // cardSpread = [];
      getCards();
    }
  }, [spread]);

  const handleStackClick = () => {
    if (!spread) {
      setSpread(true);
    }
  }

  const handleRestartClick = () => {
    setSpread(false);
    // setCardSpread([]);
    // cardSpread = [];
    getCards();
  }

  const desktopStackClass = classNames('cards', 'desktop', { 'spread': spread });
  const mobileStackClass = classNames('cards', 'mobile', { 'spread': spread });
  const instructionClass = classNames('welcome-text', {'spread': spread});

  const getCards = () => {
    const tarotCards = [];

    for (let i = 0; i < 3; i++) {
      tarotCards.push(<Card key={i} id={i} data={threeCards[i]} spread={spread} />);
    }

    // return setCardSpread([...tarotCards]);

    cardSpread = tarotCards;
    return cardSpread;
  };

  return (
    <div className="deck-wrapper">
      <div className="title" dangerouslySetInnerHTML = { { __html:
        `<h1>${`Tarot`}&nbsp;&nbsp;${`Reading`}</h1>`} } />
      <div className={desktopStackClass} onClick={handleStackClick}>
        {getCards()}
      </div>
      <div className={mobileStackClass} onClick={handleStackClick}>
        {getCards()}
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
