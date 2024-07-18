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




// App.js
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
// import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import Blog from './components/Blog';
// import Loader from './components/Loader';

// const App = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     // Set loading to true on route change
//     const handleRouteChange = () => {
//       setIsLoading(true);
//       // Simulate a delay
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 1000); // Adjust this timeout as needed
//     };
//     handleRouteChange();
//   }, [location]);

//   return (
//     <div>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="resume" element={<Resume />} />
//           <Route path="portfolio" element={<Portfolio />} />
//           <Route path="blog" element={<Blog />} />
//           <Route path="*" element={<>No Match</>} />
//         </Routes>
//       )}
//     </div>
//   );
// };

// const AppWrapper = () => (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// export default AppWrapper;
