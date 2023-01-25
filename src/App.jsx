import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Alpha from './cards/Alpha';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Alpha' element={<Alpha />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
