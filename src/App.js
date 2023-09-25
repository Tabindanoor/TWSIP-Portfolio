// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Router, Route, Routes , Outlet} from 'react-router-dom';
import { BubblyContainer , BubblyLink} from 'react-bubbly-transitions';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';

function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path="*" element={<>No Match</>} /> 
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
