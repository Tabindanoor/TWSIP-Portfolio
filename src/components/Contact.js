import React,{useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Footer from './Footer';
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiMail } from "react-icons/fi";


// import emailjs from '@emailjs/browser';

const Contact = () => {

  
   

  const [progress, setProgress] = useState(0);

  // animated line 
useEffect(() => {
  const timer = setInterval(() => {
    setProgress((prevProgress) => (prevProgress + 1) % 101);
  }, 50);

  return () => clearInterval(timer);
}, []);

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_2h3t2rw', 'template_if8h0yg', form.current, 'r5x98CVoHK2W2yP4H')
    .then((result) => {
        console.log(result.text);
        console.log('message sent successfully')
    }, (error) => {
        console.log(error.text);
    });
};


  return (
  
    <div className='bg-black text-white h-full'>
       {/* cross icon */}
            
       <div className='sticky font-bold top-6 right-6 z-10 lg:mx-5 xl:mx-16   mx-auto'>
            <Link to="/" className="bubbly-link">  <svg  className=" absolute top-0 right-0  text-8xl cursor-pointer  h-9  text-white font-bold"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg></Link>
          
            </div>
              <br /><br /><br />
            <div className='mx-auto text-center'>
                <p className='text-gray-400'>Feel free to contact me anytimes</p>
                <br />
                <p className='font-bold text-5xl text-white'>Get in Touch</p>
            </div>
            <br /><br />

           {/* animated line */}

            <div className="relative h-2  w-24 mx-auto bg-black-200">
                <div
                className="absolute top-0 left-0 h-full bg-green-500"
                style={{ width: `${progress}%` }}
                />
            </div>
            <br /><br /><br />
            
        {/* form and contact */}

        <div className='flex-col flex lg:flex-row mx-5   md:mx-12   justify-between '>

          {/* message me */}
          <div className='lg:w-[60%] mx-5  sm:mx-12'>
            <h1 className='text-2xl font-bold'>Message Me</h1><br />
              <form action=""  ref={form} onSubmit={sendEmail} className='bg-black'>
                <div className=' w-full sm:flex justify-between  '>
                   <input type="text" name="user_name" placeholder='Name' className='w-full bg-gray-900 px-5 py-4  my-2 border-b-2 border-transparent focus:border-green-500 focus:outline-none' />
                   <input type="email"  name="user_email" id=""  placeholder='Email' className='w-full bg-gray-900 px-5 py-4 sm:ml-7 my-2 border-b-2 border-transparent focus:border-green-500 focus:outline-none'/>
                </div>
               <input className='w-full border-b-2 border-transparent focus:border-green-500 focus:outline-none bg-gray-900 px-5 py-4 my-2' type="text" placeholder='Subject' name="subject" id="" />
               <textarea name="message" className='w-full bg-gray-900 px-5 py-4  my-2 border-b-2 border-transparent focus:border-green-500 focus:outline-none' placeholder='Message' id="" cols="" rows="5"></textarea>
               <button className='bg-green-600 text-white rounded-full px-8 py-1 sm:py-3 ' type="submit" value="Send">Send Message</button>
              </form>
          </div>
              {/* contact  */}


              <br className='lg:hidden' />



              <div className=' lg:w-[40%] lg:mx-0 mx-5  sm:mx-12 '>
                <h1 className='text-2xl font-bold '>Contact Info</h1><br />
                <p className='text-lg '>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                <div className='flex mt-4'>
                <div className='vertical sm:flex hidden '>

               

                <div className="w-10 h-16 text-green-500">
  <FaRegUserCircle size="100%" />
</div>
<div className="w-10 h-16 text-green-500">
  <AiOutlineHome size="100%" />
</div>
<div className="w-10 h-16 text-green-500">
  <FiMail size="100%" />
</div>



                </div>

                <div>
                <div className="h-full border-r border-gray-300 mx-4 md:mx-8">

                </div>

                </div>
                <div>
                  <p className='font-bold '>Name</p>
                  <p  className=''>Tabinda Noor</p><br />
                  <p  className='font-bold '>Location</p>
                  <p  className=''>Faisalabad</p><br />
                  <p  className='font-bold '>Contact Me</p>
                  <p  className=''>tabindanoor415@gmail.com</p><br />
                 
                </div>
                </div>
               
              </div>
         
        </div> 
    <br />




<Footer/>

            </div>
  )
}

export default Contact
