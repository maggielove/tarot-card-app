import '../css/Deck.css';
import TypeWriterEffect from "react-typewriter-effect";

const Deck = ({ onRotate }) => {
  const text = { __html: `<p>Welcome. Please consider your intention for this
    reading. When you're ready, click here to begin.</p>` };

  const handleClick = () => {
    console.log(`clicked welcome txt`);
    // add class to animate deck
    // could make it a promise, so that when the animation is complete, it calls onRotate
    // or i could move all card logic to the same component, either deck or app...?
  }

  return (
    <div className="deck-wrapper">
      <img className="deck" src={require('../images/deck-sideways.png')} alt="tarot deck"
      width="500" height="347" />
      <div className="welcome-text" onClick={handleClick}>
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'Lumanosimo',
          color: '#f2f2f2',
          fontSize: '21px'
        }}
        startDelay={1000}
        cursorColor="white"
        multiText={[
          'Welcome.',
          'Please consider your intention for this reading.',
          'When you\'re ready, click here to begin.'
        ]}
        multiTextDelay={2000}
        typeSpeed={100}
      />
      </div>
    </div>
  )
}

export default Deck;
