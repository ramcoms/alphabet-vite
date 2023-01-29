import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Alpha from './cards/Alpha';
import Bravo from './cards/Bravo';
import Charlie from './cards/Charlie';
import Delta from './cards/Delta';
import Echo from './cards/Echo';
import Foxtrot from './cards/Foxtrot';
import Golf from './cards/Golf';
import Hotel from './cards/Hotel';
import India from './cards/India';
import Juliet from './cards/Juliet';
import Kilo from './cards/Kilo';
import Lima from './cards/Lima';
import Mike from './cards/Mike';
import November from './cards/November';
import Oscar from './cards/Oscar';
import Papa from './cards/Papa';
import Quebec from './cards/Quebec';
import Romeo from './cards/Romeo';
import Sierra from './cards/Sierra';
import Tango from './cards/Tango';
import Uniform from './cards/Uniform';
import Victor from './cards/Victor';
import Whiskey from './cards/Whiskey';
import Xray from './cards/Xray';
import Yankee from './cards/Yankee';
import Zulu from './cards/Zulu';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Alpha' element={<Alpha />} />
          <Route path='/Bravo' element={<Bravo />} />
          <Route path='/Charlie' element={<Charlie />} />
          <Route path='/Delta' element={<Delta />} />
          <Route path='/Echo' element={<Echo />} />
          <Route path='/Foxtrot' element={<Foxtrot />} />
          <Route path='/Golf' element={<Golf />} />
          <Route path='/Hotel' element={<Hotel />} />
          <Route path='/India' element={<India />} />
          <Route path='/Juliet' element={<Juliet />} />
          <Route path='/Kilo' element={<Kilo />} />
          <Route path='/Lima' element={<Lima />} />
          <Route path='/Mike' element={<Mike />} />
          <Route path='/November' element={<November />} />
          <Route path='/Oscar' element={<Oscar />} />
          <Route path='/Papa' element={<Papa />} />
          <Route path='/Quebec' element={<Quebec />} />
          <Route path='/Romeo' element={<Romeo />} />
          <Route path='/Sierra' element={<Sierra />} />
          <Route path='/Tango' element={<Tango />} />
          <Route path='/Uniform' element={<Uniform />} />
          <Route path='/Victor' element={<Victor />} />
          <Route path='/Whiskey' element={<Whiskey />} />
          <Route path='/Xray' element={<Xray />} />
          <Route path='/Yankee' element={<Yankee />} />
          <Route path='/Zulu' element={<Zulu />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
