import HomeBtn from '../components/home-btn';
import './Alpha.css';

const alphaCards = [
  'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const alphaRandom = Math.floor(Math.random() * alphaCards.length);
const alphaIndex = () => alphaCards.map((card) => card[alphaRandom]);

console.log(alphaRandom);
console.log(alphaIndex());

const Alpha = () => {
  return (
    <div className='alpha'>
      <h2>Alpha</h2>
      <div className='flashcard' onClick={() => alphaIndex()}>
        <img
          src='https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='apple-pic'
        />
      </div>
      <HomeBtn />
    </div>
  );
};

export default Alpha;
