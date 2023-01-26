import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Alpha from './cards/Alpha';
import Bravo from './cards/Bravo';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Alpha' element={<Alpha />} />
          <Route path='/Bravo' element={<Bravo />} />
          {/* <Route path='/Charlie' element={<Charlie />} />
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
          <Route path='/Yankees' element={<Yankees />} />
          <Route path='/Zulu' element={<Zulu />} /> */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
