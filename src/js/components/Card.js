import { useState, useEffect } from 'react';
import classNames from 'classnames';
import '../../css/Card.css';

const Card = ({ data, id, spread }) => {
    const [flipped, setFlipped] = useState(false);
    const [descriptionHidden, setDescriptionHidden] = useState(true);

    // When user starts over, this prevents all cards from automatically flipping
    // as soon as they're spread
    useEffect(() => {
      if (!spread) {
        setFlipped(false);
      }
    }, [spread]);

    const handleClick = () => {
      if (spread) {
        setFlipped(true);
      }
    }

    const handleMouseEnter = () => {
      setDescriptionHidden(false);
    }

    const handleMouseLeave = () => {
      setDescriptionHidden(true);
    }

    const cardClass = classNames('card', `card-${id}`,
      { 'flipped': flipped });
    const cardInfoClass = classNames('description', {
      'hidden': descriptionHidden });

    let time;
    switch(id) {
      case 0:
        time = "Past";
        break;
      case 1:
        time = "Future"
        break;
      case 2:
        time = "Present";
        break;
      default:
        time = "";
    }

    // card descriptions from https://www.biddytarot.com/
    const description = { __html: `<h2>${time}</h2> \n
        <p>${data.description}</p>` };

    return (
        <div className={cardClass} onClick={handleClick}>
            <div className='card-inner'>
                <div className='card-front'>
                  <img src={require('../../images/card-top-view.png')}
                alt={data.name} height={362} width={200} />
                </div>
                <div className='card-back' onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                    {data &&
                      <img src={require(`../../${data.image}`)}
                      alt={data.name} height={362} width={200} />
                    }
                </div>
                <div className={cardInfoClass}
                   dangerouslySetInnerHTML={description} />
            </div>
        </div>
    );
};

export default Card;
