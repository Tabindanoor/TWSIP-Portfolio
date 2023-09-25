import React from 'react'
import { useState } from 'react';
import {useEffect} from 'react'
import { Link } from 'react-router-dom';



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
        className="w-full h-full object-cover"
        src={image}
        alt="Product"
      />
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90 flex flex-col items-center justify-center">
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <a href={link} className='text-green-500'> more info</a><br />
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
          title:"Label tag Mockup",
          image:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-1.jpg",
          link:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-1.jpg",
          category: 'Design'
      
      },
      {  id:'2',
          title:"3D Bag Mockup",
          image:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-2.jpg",
          link:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-2.jpg",
          category: 'Design'
      
      },
      {
          id:'3',
          title:"Modern Bag Mockup",
          image:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-3.jpg",
          link:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-3.jpg",
          category: 'Photos'
      
      },
      {  id:'4',
          title:"Cofee Cup Design",
          image:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-4.jpg",
          link:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-4.jpg",
          category: 'brand'
      
      },
      {     id:'5',
          title:"T-shirt Design",
          image:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-5.jpg",
          link:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-5.jpg",
          category: 'brand'
      
      },
      {
          id:'6',
          title:"Packaging Box Mockup",
          image:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-6.jpg",
          link:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/item-6.jpg",
          category: 'Photos'
      
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
  <div className='bg-black text-white '>
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
            <ul className='flex text-center justify-center '>
            <button
          className={`mr-2  ${selectedCategory === 'all' ? 'text-green-500 hover:underline' : ''}`}
          onClick={() => handleCategoryClick('all')}
        >
          All
        </button>
                <button
          className={`mr-2  mx-5 ${selectedCategory === 'brand' ? 'text-green-500 hover:underline' : ''}`}
          onClick={() => handleCategoryClick('brand')}
        >
          Brand
        </button>
                <button
          className={`mr-2  mx-5 ${selectedCategory === 'Design' ? 'text-green-500 hover:underline' : ''}`}
          onClick={() => handleCategoryClick('Design')}
        >
          Design
        </button>
                <button
          className={`mr-2  mx-5 ${selectedCategory === 'Photos' ? 'text-green-500 hover:underline' : ''}`}
          onClick={() => handleCategoryClick('Photos')}
        >
          Photos
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
    </div>
  )
      }


export default Portfolio
