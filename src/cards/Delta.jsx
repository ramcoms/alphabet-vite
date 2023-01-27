import { useState } from 'react';

// components
import HomeBtn from '../components/home-btn';

// data
import { imagesData } from '../db';

// style
import './Cards.css';

export default function Delta() {
  const [index, setIndex] = useState(0);

  const array = imagesData.delta;
  const src = array[index].url;
  const name = array[index].name;

  const [imageSrc, setImageSrc] = useState(src);
  const [imageName, setImageName] = useState(name);

  const handleOnclick = () => {
    index == array.length - 1 ? setIndex(0) : setIndex(index + 1);
    setImageSrc(src);
    setImageName(name);
  };

  return (
    <div className='flashcard-container'>
      <HomeBtn />
      <div className='flashcard'>
        <img src={imageSrc} onClick={() => handleOnclick()} />
        <p>{imageName}</p>
      </div>
    </div>
  );
}
