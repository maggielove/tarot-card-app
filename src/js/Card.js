import React from 'react';
import classNames from 'classnames';
import '../css/Card.css';

// TODO choose clear... card...
export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.state = {
            flipped: false,
            descriptionHidden: true
        }
    }

    //TODO change this.state logic to useState
    // TODO update to get rid of extra bg card
    handleClick() {
      console.log('clicked card');

      if (this.props.spread) {
        this.setState({
            flipped: true
        });
      }
    }

    handleMouseEnter() {
      this.setState({ descriptionHidden: false });
    }

    handleMouseLeave() {
      this.setState({ descriptionHidden: true });
    }

    render() {
        // TODO add back spread
        const { data, id } = this.props;
        const cardClass = classNames('card', `card-${id}`,
          { 'flipped': this.state.flipped });
        const cardInfoClass = classNames('description', {
          'hidden': this.state.descriptionHidden });
        const description = { __html: `<p>${data.description}</p>` };

        return (
            <div className={cardClass} onClick={this.handleClick}>
                <div className='card-inner'>
                    <div className='card-front'>
                      <img src={require('../images/card-top-view.png')}
                    alt={data.name} height={362} width={200} />
                    </div>
                    <div className='card-back' onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}>
                        {data &&
                          <img src={require(`../${data.image}`)}
                          alt={data.name} height={362} width={200} />
                        }
                    </div>
                    <div className={cardInfoClass}
                      dangerouslySetInnerHTML={description} />
                </div>
            </div>
        );
    }
};
