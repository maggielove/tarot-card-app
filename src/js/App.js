import React from 'react';
import '../css/App.css';
import Card from './Card.js';
import Deck from './Deck.js'
import * as deck from './cards.json';

const allCards = deck;
let cardArray;
cardArray = allCards.cards;
let spread = [];

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

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.toggleReadingProgress = this.toggleReadingProgress.bind(this);
        this.state = {
            readingInProgress: false,
            spread: null
        }
    }

    toggleReadingProgress() {
      this.setState({
        readingInProgress: true
      })
    }

    handleClick() {
      console.log('clicked');
    }

    renderDeck() {
      return <Deck onRotate={this.toggleReadingProgress} />
    }

    renderSpread() {
        const { spread } = this.state;
        let cardsToDisplay = [];

        // render 3 cards
        // TODO change cardsToDisplay to readingCards
        for (var i = 0; i < 3; i++) {
            cardsToDisplay.push(<Card key={i.toString()} data={pickACard()} />);
        }

        return cardsToDisplay;
    }

    render() {
      const { readingInProgress } = this.state;

      return (
        <div className="App">
            <div className="cards-wrapper">
              {readingInProgress ? this.renderSpread() : this.renderDeck()}
            </div>
        </div>
      );
    }
}
