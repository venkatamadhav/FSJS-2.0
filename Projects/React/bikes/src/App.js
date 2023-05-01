import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home.js';
import About from './Components/About.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to ="/">#BIKEWORLD</Link>
          <nav className='text-decoration-line: none;'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
