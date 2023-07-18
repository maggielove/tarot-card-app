import React from 'react';
import classNames from 'classnames';
import './css/Card.css';

// TODO choose clear... card...
export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            flipped: false
        }
    }

    handleClick() {
        console.log('card clicked');
        this.setState({
            flipped: true
        });
    }

    render() {
        const { data } = this.props;
        const cardClass = classNames('card', { 'flipped': this.state.flipped });

        return (
            <div className={cardClass} onClick={this.handleClick}>
                <div className='card-inner'>
                    <div className='card-front'>
                      <img src={require('./images/card-top-view.png')}
                    alt={data.name} height={362} width={200} />
                    </div>
                    <div className='card-back'>
                        {data &&
                          <img src={require(`${data.image}`)}
                          alt={data.name} height={362} width={200} />
                        }
                    </div>
                </div>
            </div>
        );
    }
};
