// Loader.js
import React from 'react';
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="cloud">
        <span className="rain" style={{ '--i': 1 }}></span>
        <span className="rain" style={{ '--i': 2 }}></span>
        <span className="rain" style={{ '--i': 3 }}></span>
        <span className="rain" style={{ '--i': 4 }}></span>
        <span className="rain" style={{ '--i': 5 }}></span>
        <span className="rain" style={{ '--i': 6 }}></span>
        <span className="rain" style={{ '--i': 7 }}></span>
      </div>
    </div>
  );
};

export default Loader;
