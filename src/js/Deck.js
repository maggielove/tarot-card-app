import '../css/Deck.css';

const Deck = ({ onRotate }) => {
  const text = { __html: `<p>Welcome. Please consider your intention for this
    reading. When you're ready, click here to begin.</p>` };

  return (
    <div className="deck-wrapper">
      <img src={require('../images/deck-sideways.png')} alt="tarot deck"
      width="500" height="347" />
      <div className="welcome-text" dangerouslySetInnerHTML={text}
        onClick={onRotate} />
    </div>
  )
}

export default Deck;
