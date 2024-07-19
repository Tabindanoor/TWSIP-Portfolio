// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { BubblyContainer , BubblyLink} from 'react-bubbly-transitions';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    // Simulate a network request or data fetching
    const fetchData = async () => {
      setIsLoading(true);
      // Simulate a delay
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <div>
     {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
}

export default App;



