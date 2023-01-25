import { useState } from 'react';
import { useGetPic } from './useGetPic';
import HomeBtn from '../components/home-btn';
import './Cards.css';

const bravoCards = [
  'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/14885781/pexels-photo-14885781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3180752/pexels-photo-3180752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

// const getPic = () => {
//   const alphaRandom = Math.floor(Math.random() * alphaCards.length);
//   const picSource = alphaCards[alphaRandom];
//   return picSource;
// };

const Bravo = () => {
  const [img, setImg] = useState(bravoCards[0]);

  return (
    <div className='bravo'>
      <h2>bravo</h2>
      <HomeBtn />
      <button onClick={() => setImg(useGetPic(bravoCards))}>Next</button>
      <div className='flashcard'>
        <img src={img} />
      </div>
    </div>
  );
};

export default Bravo;
