import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Alpha from './cards/Alpha';
import Bravo from './cards/Bravo';
import Charlie from './cards/Charlie';
import Delta from './cards/Delta';
import Echo from './cards/Echo';
import Foxtrot from './cards/Foxtrot';

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
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
