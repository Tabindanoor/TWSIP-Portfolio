import React,{useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Footer from './Footer';
// import emailjs from '@emailjs/browser';

const Contact = () => {

    // Replace with your email sending logic here
    // You can use libraries like Nodemailer, EmailJS, etc. to send the email

    // Reset form fields after submission
   

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
  
    <div className='bg-black text-white'>
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

        <div className='flex-col flex lg:flex-row mx-5   lg:mx-36 justify-between '>

          {/* message me */}
          <div className='lg:w-[60%] mx-12'>
            <h1 className='text-2xl font-bold'>Message Me</h1><br />
              <form action=""  ref={form} onSubmit={sendEmail} className='bg-black'>
                <div className=' w-full flex justify-between '>
                   <input type="text" name="user_name" placeholder='Name' className='w-full bg-gray-900 px-5 py-4  my-2 border-b-2 border-transparent focus:border-green-500 focus:outline-none' />
                   <input type="email"  name="user_email" id=""  placeholder='Email' className='w-full bg-gray-900 px-5 py-4 ml-7 my-2 border-b-2 border-transparent focus:border-green-500 focus:outline-none'/>
                </div>
               <input className='w-full border-b-2 border-transparent focus:border-green-500 focus:outline-none bg-gray-900 px-5 py-4 my-2' type="text" placeholder='Subject' name="subject" id="" />
               <textarea name="message" className='w-full bg-gray-900 px-5 py-4  my-2 border-b-2 border-transparent focus:border-green-500 focus:outline-none' placeholder='Message' id="" cols="" rows="5"></textarea>
               <button className='bg-green-600 text-white rounded-full px-8 py-3 ' type="submit" value="Send">Send Message</button>
              </form>
          </div>
              {/* contact  */}
              <div className=' lg:w-[40%] mx-12 lg:mx-0'>
                <h1 className='text-2xl font-bold '>Contact Info</h1><br />
                <p className='text-lg '>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                <div className='flex mt-4'>
                <div className='vertical flex '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-16">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6 12c-1.105 0-2-.895-2-2 0-2.205-1.795-4-4-4s-4 1.795-4 4c0 1.105-.895 2-2 2h-2v2h16v-2h-2z" />
  </svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className=" w-10 h-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="  w-10 h-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="green" className="  w-10 h-16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 5.97V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5.97M12 12L2 6l10 6 10-6zM2 6l10 6 10-6" />
  </svg>

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
                  <p  className='font-bold '>Call Me</p>
                  <p  className=''>+92 3055734382</p><br />
                  <p  className='font-bold '>Email me</p>
                  <p  className=''>tabindanoor415@gmail.com</p>
                </div>
                </div>
               
              </div>
         
        </div> 
    <br /><br /><br />


<Footer/>

            </div>
  )
}

export default Contact
