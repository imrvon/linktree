import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
