import { useState } from 'react';

// components
import HomeBtn from '../components/home-btn';

// data
import { imagesData } from '../db';

// style
import './Cards.css';

export default function Alpha() {
  const [index, setIndex] = useState(0);
  const array = imagesData.alpha;
  const src = array[index].url;
  const [imageSrc, setImageSrc] = useState(src);

  const handleOnclick = () => {
    index == array.length - 1 ? setIndex(0) : setIndex(index + 1);
    setImageSrc(src);
  };

  return (
    <div className='alpha'>
      <h2>alpha</h2>
      <HomeBtn />
      <button onClick={() => handleOnclick()}>Next</button>
      <div className='flashcard'>
        <img src={imageSrc} />
      </div>
    </div>
  );
}
