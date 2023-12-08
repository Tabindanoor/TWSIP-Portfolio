import React from 'react'
import { useState } from 'react';
import {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import weather from "../images/weather.png"
import text from "../images/text.png"
import mern from "../images/mernpr.png"
import todo from "../images/todo.png"
import figma from "../images/figma.png"
import efigma from "../images/efigma.png"




const Card = ({ title, image, link }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={`   mx-auto justify-between relative overflow-hidden shadow-md transition duration-300 ease-in-out`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="h-[300px] object-cover"
        src={image}
        alt="Product"
      />
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90 flex flex-col items-center justify-center">
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <a href={link} className='text-green-500'> More info</a><br />
        </div>
      )} 
    </div>
  );
};



const Portfolio = () => {
    const [progress, setProgress] = useState(0);
    // animated line 
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 50);

    return () => clearInterval(timer);
  }, []);
  

  const products=[
      {   id:'1',
          title:"Text Analyzer",
          image:text,
          link:"https://github.com/Tabindanoor/TextAnalyzer",
          category: 'React Apps'
      
      },
      {  id:'2',
          title:"Weather App",
          image:weather,
          link:"https://github.com/Tabindanoor/WeatherappInReact",
          category: 'React Apps'
      
      },
      {
          id:'3',
          title:"Image to Text, Audio, Video & pdf",
          image:mern,
          link:"https://github.com/Tabindanoor/image-to-text-audio-video-",
          category: 'React with Database'
      
      },
      {  id:'4',
          title:"Figma To React",
          image:figma,
          link:"https://github.com/Tabindanoor/landingPageReact",
          category: 'Figma To React'
      
      },
      {     id:'5',
          title:"Figma to Rect - E-learning",
          image:efigma,
          link:"https://github.com/techloset/E-Learning-App/",
          category: 'Figma To React'
      
      },
      {
          id:'6',
          title:"Todo With Firebase",
          image:todo,
          link:"https://github.com/Tabindanoor/Todo-List-using-Firebase",
          category: 'React with Database'
      
      },
  ]

  const [selectedCategory, setSelectedCategory] = useState('all');
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  const filteredCards = selectedCategory === 'all'
    ? products
    : products.filter((card) => card.category === selectedCategory);

     
      return (
  <div className='bg-black text-white h-full  '>
        {/* cross icon */}
            
            <div className='sticky font-bold top-6 right-6 z-10 lg:mx-5 xl:mx-16   mx-auto'>
            <Link to="/" className="bubbly-link">  <svg  className=" absolute top-0 right-0  text-8xl cursor-pointer  h-9  text-white font-bold"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg></Link>
          
            </div>
          
          
<br /><br />
              <br /><br /><br />
            <div className='mx-auto text-center'>
                <p className='text-gray-400'>Showcasing some of my best work</p>
                <br />
                <p className='font-bold text-5xl'>Portfolio</p>
            </div>
            <br /><br />

           {/* animated line */}

            <div className="relative h-2  w-24 mx-auto bg-black-200">
                <div
                className="absolute top-0 left-0 h-full bg-green-500"
                style={{ width: `${progress}%` }}
                />
              
            </div>
           <br /><br />
           
           <div className='mx-auto text-center '>
            <ul className='sm:flex text-center justify-center '>
            <button
          className={`mr-2  ${selectedCategory === 'all' ? 'text-green-500 hover:underline' : ''}`}
          onClick={() => handleCategoryClick('all')}
        >
          All
        </button>
                <button
          className={`mr-2  mx-5 ${selectedCategory === 'Figma To React' ? 'text-green-500 hover:underline' : ''}`}
          onClick={() => handleCategoryClick('Figma To React')}
        >
          Figma To React
        </button>
                <button
          className={`mr-2  mx-5 ${selectedCategory === 'React Apps' ? 'text-green-500 hover:underline' : ''}`}
          onClick={() => handleCategoryClick('React Apps')}
        >
          React Apps
        </button>
                <button
          className={`mr-2  mx-5 ${selectedCategory === 'React with Database' ? 'text-green-500 hover:underline' : ''}`}
          onClick={() => handleCategoryClick('React with Database')}
        >
          React with Database
        </button>
            </ul>
           </div>
           
<br /> <br /><br />


<div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-9 mx-10 sm:mx-36">
      {filteredCards.map((card) => (
        <Card key={card.id} title={card.title} image={card.image} link={card.link} />
      ))}
      <br /><br /><br />
      

    </div>
    <Footer />
    </div>
  )
      }


export default Portfolio
