import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chapter1 from './components/pages/Chapter1/Chapter1';
import Chapter2 from './components/pages/Chapter2/Chapter2';
import Chapter3 from './components/pages/Chapter3/Chapter3';
import Chapter4 from './components/pages/Chapter4/Chapter4';
import Decisions from './components/pages/Decisions/Decisions';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/karen_no_uta">
        <NavBar />
        <Routes>
          <Route path="/chapter1" element={<Chapter1 />} />
          <Route path="/chapter2" element={<Chapter2 />} />
          <Route path="/chapter3" element={<Chapter3 />} />
          <Route path="/chapter4" element={<Chapter4 />} />
          <Route path="/gallery"  />
          <Route path="/decisions" element={<Decisions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
