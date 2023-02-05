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
const selectCards = () => {
    let randomIndex = getRandomIndex();
    let chosenCard = cardArray[randomIndex];

    spread.push(chosenCard);

    // remove the chosenCard from the virtual deck
    cardArray = cardArray.filter(card => card.name !== chosenCard.name);

    if (spread.length < 3) {
        selectCards();
    }

    return spread;
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            spread: null,
            buttonText: `read me`
        }
    }

    handleClick() {
      this.setState({
          spread: selectCards(),
          buttonText: `new reading`
      });
    }

    renderCards() {
        const { spread } = this.state;
        return spread.map(card => <Card
            key={spread.indexOf(card).toString()}
            data={card} />);
    }

    render() {
      return (
        <div className="App">
            <div className="cards-wrapper">
                {this.state.spread && this.renderCards()}
            </div>
            <div className="button-wrapper">
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
            </div>
        </div>
      );
    }
}
