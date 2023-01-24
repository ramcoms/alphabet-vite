import { NavLink } from 'react-router-dom';
import './Card.css';

const Card = ({ alphabet }) => {
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

export default Card;
