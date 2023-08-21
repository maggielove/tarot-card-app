import '../css/Deck.css';
import Card from './Card.js';
import { useState } from 'react';
import classNames from 'classnames';
import TypeWriterEffect from "react-typewriter-effect";

const Deck = ({ onRotate }) => {
  const [spread, setSpread] = useState(false);

  const text = { __html: `<p>Welcome. Please consider your intention for this
    reading. When you're ready, click here to begin.</p>` };

  const handleStackClick = () => {
    setSpread(true);
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
  const cards = (
    <>
      <div className="card card-1"/>
      <div className="card card-2"/>
      <div className="card card-3" />
    </>
  );

  return (
    <div className="deck-wrapper">
      <div className={desktopStackClass} onClick={handleStackClick}>
        {cards}
      </div>
      <div className={mobileStackClass} onClick={handleStackClick}>
        {cards}
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
