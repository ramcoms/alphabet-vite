import { useState } from 'react';
import { useGetPic } from './useGetPic';
import HomeBtn from '../components/home-btn';
import './Cards.css';

const bravoCards = [
  {
    name: 'ball',
    url: 'https://images.pexels.com/photos/945471/pexels-photo-945471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'boat',
    url: 'https://images.pexels.com/photos/261516/pexels-photo-261516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'banana',
    url: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'balloon',
    url: 'https://images.pexels.com/photos/3371094/pexels-photo-3371094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export default function Bravo() {
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(bravoCards[index].url);

  const handleOnclick = () => {
    index == bravoCards.length - 1 ? setIndex(0) : setIndex(index + 1);
    setImg(useGetPic(bravoCards, index).url);
  };

  return (
    <div className='bravo'>
      <h2>bravo</h2>
      <HomeBtn />
      <button onClick={() => handleOnclick()}>Next</button>
      <div className='flashcard'>
        <img src={img} />
      </div>
    </div>
  );
}
