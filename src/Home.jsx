import Cards from './Cards';
import Header from './components/header';
import { useFetch } from './components/fetchImage';

const alphabet = [
  'Alpha',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo',
  'Foxtrot',
  'Golf',
  'Hotel',
  'India',
  'Juliet',
  'Kilo',
  'Lima',
  'Mike',
  'November',
  'Oscar',
  'Papa',
  'Quebec',
  'Romeo',
  'Sierra',
  'Tango',
  'Uniform',
  'Victor',
  'Whiskey',
  'Xray',
  'Yankee',
  'Zulu',
];

const Home = () => {
  // db test
  const { imageData } = useFetch('apple fruit', 5);
  console.log(imageData);

  return (
    <div className='Home'>
      <Header />
      <Cards alphabet={alphabet} />
    </div>
  );
};

export default Home;
