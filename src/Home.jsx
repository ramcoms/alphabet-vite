import Card from './Card';
import Header from './components/header';

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
  return (
    <div className='Home'>
      <Header />
      <Card alphabet={alphabet} />
    </div>
  );
};

export default Home;
