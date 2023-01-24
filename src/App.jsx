import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Alpha from './cards/Alpha';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/alpha' element={<Alpha />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
