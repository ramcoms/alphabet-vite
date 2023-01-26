import { useState } from 'react';
import { useGetPic } from './useGetPic';
import HomeBtn from '../components/home-btn';
import './Cards.css';

const alphaCards = [
  {
    name: 'apple',
    url: 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'airplane',
    url: 'https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'ambulance',
    url: 'https://images.pexels.com/photos/14885781/pexels-photo-14885781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'ant',
    url: 'https://images.pexels.com/photos/3180752/pexels-photo-3180752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export default function Alpha() {
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(alphaCards[index].url);

  const handleOnclick = () => {
    index == alphaCards.length - 1 ? setIndex(0) : setIndex(index + 1);
    setImg(useGetPic(alphaCards, index).url);
  };

  return (
    <div className='alpha'>
      <h2>alpha</h2>
      <HomeBtn />
      <button onClick={() => handleOnclick()}>Next</button>
      <div className='flashcard'>
        <img src={img} />
      </div>
    </div>
  );
}
