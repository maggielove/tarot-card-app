import './css/Card.css';

// TODO choose clear... card...

const Card = ({ data }) => {
    // TODO change this so it updates when you click the button

    return (
        <div className="card">
        {data &&
            <div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            </div>
        }
        </div>
    );
};

export default Card;
