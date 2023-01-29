import { NavLink } from 'react-router-dom';
import './Cards.css';

const Cards = ({ alphabet }) => {
  return (
    <div className='card-container'>
      {alphabet.map((letter, index) => (
        <div className='card' key={index}>
          <NavLink to={letter}>
            <span>{letter[0]}</span>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Cards;
