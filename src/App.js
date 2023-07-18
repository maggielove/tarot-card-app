import React from 'react';
import './css/App.css';
import Card from './Card.js';
import * as deck from './cards';

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
        this.state = {
            spread: null
        }
    }

    handleClick() {
      console.log('clicked');
    }

    renderCards() {
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
      return (
        <div className="App">
            <div className="cards-wrapper">
                {this.renderCards()}
            </div>
        </div>
      );
    }
}
