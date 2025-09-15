import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chapter1 from './components/pages/Chapter1/Chapter1';
import Chapter2 from './components/pages/Chapter2/Chapter2';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/karen_no_uta">
        <NavBar />
        <Routes>
          <Route path="/chapter1" element={<Chapter1 />} />
          <Route path="/chapter2" element={<Chapter2 />} />
          <Route path="/memories"  />
          <Route path="/gallery"  />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
