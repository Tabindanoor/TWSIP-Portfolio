import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=''>
        
        <nav className=" ">
      <div className=" mx-auto my-auto ">
        <div className="flex justify-between ">
          <div className="flex-shrink-0 flex items-center ">
            {/* <img className="w-20 mr-4" src={white_linux} alt="Logo" /> */}
            <p className='text-white rounded-md font-semibold'>TNM</p>
          </div>
          <div className="hidden md:-ml-4 md:flex md:space-x-0  lg:space-x-6 sm:-space-x-3  lg:ml-3 text-[20px] justify-around">
            <div className="text-white  px-3 py-2 rounded-md font-semibold cursor-pointer">
            <Link  to='/about' className="bubbly-link">About</Link></div>
            <div className="text-white  px-3 py-2 rounded-md font-semibold cursor-pointer">
            <Link  to='/resume' className="bubbly-link">Resume</Link>
            </div>
            <div className="text-white  px-3 py-2 rounded-md font-semibold cursor-pointer">
            <Link  to='/portfolio' className="bubbly-link">Portfolio</Link>              
            </div>
            <div className="text-white  px-3 py-2 rounded-md font-semibold cursor-pointer">
            <Link  to='/blog' className="bubbly-link">Blog</Link>
            </div>
            <div className="text-white  px-3 py-2 rounded-md font-semibold cursor-pointer">
            <Link  to='/contact' className="bubbly-link">Contact</Link>
            </div>
                                     
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white-100 focus:outline-none focus:bg-white-100 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 font-medium ">
            <div  className="block text-white px-3 py-2 rounded-md text-lg cursor-pointer"><Link  to='/about' className="bubbly-link">About</Link></div>
            <div  className="block text-white px-3 py-2 rounded-md text-lg cursor-pointer"><Link  to='/resume' className="bubbly-link">Resume</Link></div>
            <div  className="block text-white px-3 py-2 rounded-md text-lg cursor-pointer"><Link  to='/portfolio' className="bubbly-link">Portfolio</Link></div>
            <div  className="block text-white px-3 py-2 rounded-md text-lg cursor-pointer"><Link  to='/blog' className="bubbly-link">Blog</Link></div>
            <div  className="block text-white px-3 py-2 rounded-md text-lg cursor-pointer"><Link  to='/contact' className="bubbly-link">Contact</Link></div>
          </div>
        </div>
      )}
    </nav>
  
    </div>
  )
}

export default Navbar