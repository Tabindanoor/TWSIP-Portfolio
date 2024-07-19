import React from 'react'
import { useEffect, useState, useRef } from 'react';
import res from '../images/My CV (2).pdf'
import { Link } from 'react-router-dom';
import './About.css'
import girl1 from "../images/girl1.png"
import girl2 from "../images/girl2.png"
import boy1 from "../images/boy1.png"
import boy2 from "../images/boy2.png"
import Footer from './Footer';
import profile from '../images/profile.jpg';
import { FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { TbPremiumRights } from "react-icons/tb";




const EmailButton = ({ email }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      className="text-white bg-green-600 rounded-full focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
      onClick={handleEmailClick}
    >
      Get started
    </button>
  );
};


const testimonial = [
  {
    img: girl1,
    name:"Priya Sharma",
    title:"Small Business Owner",
    description:"Her expertise in full-stack development ensured the seamless creation of our complex application. Timely delivery, transparent communication, and a commitment to quality make them our go-to development partner"
  },
  {
    img: boy1,
    name:"Ahmad Khan",
    title:"Business Analyst",
    description:"The team's dedication to our project and their technical prowess set them apart. Highly recommended"
  },
  {
    img: girl2,
    name:"Sana Malik",
    title:"Freelance Graphic Designer",
    description:"Her attention to detail, creativity, and ability to capture our brand essence exceeded our expectations. We look forward to future collaborations"
  },
  {
    img: boy2,
    name:"Aarav Singh",
    title:"Independent Consultant",
    description:"She demonstrated the exceptional quality of our offerings. We strive to exceed expectations and are thrilled to have provided a positive experience!!"
  },
]

const About = () => {

const [currentIndex, setCurrentIndex] = useState(0);

const handlePrev = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonial.length - 1 : prevIndex - 1));
};

const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex === testimonial.length - 1 ? 0 : prevIndex + 1));
}; 

  // const move

   const  cardRef = useRef();
  //  green progress line state
const [progress, setProgress] = useState(0);



  const [birthdate, setBirthdate] = useState('2002-03-21'); // Replace with your actual birthdate

  const calculateAge = () => {
    const birthdateDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthdateDate.getFullYear();

    if (
      today.getMonth() < birthdateDate.getMonth() ||
      (today.getMonth() === birthdateDate.getMonth() && today.getDate() < birthdateDate.getDate())
    ) {
      age -= 1;
    }

    return age;
  };
  // object data for the cards 
  
  
  const myCards = [
    {
      image:     <FaCode />,
      service: 'Web Development Services',
      description: 'Full Stack Web Development to Craft responsive and interactive web interfaces using React.js and build robust server-side applications with Node.js and Express.js.',
      }
    ,
    {
      image:   <CgWebsite />      ,
              service: 'Real-Time Web Applications ',
        description: ' I can create dynamic, real-time and bi-directional applications such as multiplayer games, chat apps and realtime editors using Socket.io for an interactive user experience. ',
      }
    ,
    
    {
      image:     <MdOutlineSecurity />
      ,
        service: 'Cyber Security & Kali Linux  ',
        description: 'Detecting the weakness and vulnerabilities in the websites with adverse Effects using ethical hacking techniques to keep them safe against cyber threats.',
      }
    ,
    {
      image:    <IoSchool />
      ,
        service: 'Educational & Training Services',
        description: 'Offering online courses and training in web development, programming, and ethical hacking for dedicated learners.',
      }
    ,
    {
      image:     <IoColorPaletteSharp />     ,
        service: 'Graphic Design',
        description: "Create captivating logos, banners, and other visual content to elevate your brand's online presence and engage your audience.",
      }
    ,
      {
        image:    <FaPencilAlt />  ,
        service: 'Content Writing',
        description: 'I can Write engaging and informative content for blogs and websites to captivate the audience and enhance your online presence.',

      }
  ];
//  mapping the card data 

  const cardData = myCards.map(
    (element,index) => {
        return (

            <div
            key={index}
            className=" cursor-pointer mx-5  " >
              <div  ref={cardRef} className="bg-slate-900  max-w-sm p-6   shadow-2xl hover:border-b-2 hover:border-green-600  dark:bg-gray-800 dark:border-gray-700">
     
<div className='text-3xl text-green-600'>
  {element.image}
</div>

     <br />
         <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">{element.service}</h5>
  <br />
     <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{element.description}</p>
     
  </div>
         <br />            
  </div>
        )
    }
)


    // animated line 
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // princing cards 
  const pricing = [
    {
      
      title:"Standard",
      price:"$20",
      description:{mobile:"Mobile App Design", responsive:"Responsive Design", database:"Database Design", web :"Web Design", support:"24/7 Support"},
        email: "tabindanoor415@gmail.com"}
      ,
    {
      
      title:"Basic",
      price:"$40",
      description:{mobile:"Mobile App Design", responsive:"Responsive Design", database:"Database Design", web :"Web Design", support:"24/7 Support"},
        email: "tabindanoor415@gmail.com"},  
      {
      
      title:"Primium",
      price:"$60",
      description:{mobile:"Mobile App Design", responsive:"Responsive Design", database:"Database Design", web :"Web Design", support:"24/7 Support"},
      email: "tabindanoor415@gmail.com"
    }
  ]
   

                      
  return (
    <div>
        <div className='bg-black text-white '>

        {/* cross icon */}
        {/* <a href="mailto:tabindanoor415@gmail.com">Get started</a> */}
           
            <div className='sticky font-bold top-6 right-6 z-10 lg:mx-5 xl:mx-16   mx-auto'>
            <Link to="/" className="bubbly-link">  <svg  className=" absolute top-0 right-0  text-8xl cursor-pointer  h-9  text-white font-bold"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg></Link>
          
            </div>
          
          
              <br />
              <br />
              <br />
            <div className='mx-auto text-center'>
                <p className='text-gray-400'>Get to know me</p>
                <br />
                <p className='font-bold text-5xl'>About Me</p>
            </div>
            <br />

           {/* animated line */}

            <div className="relative h-2  w-24 mx-auto bg-black-200">
                <div
                className="absolute top-0 left-0 h-full bg-green-500"
                style={{ width: `${progress}%` }}
                />
            </div>

            <br />
            {/* who am i  */}
            <div className='flex-col  justify-between xl:mx-36  mx-12 flex lg:flex-row '>
                {/* girl picture  */}
                <div className=' lg:block lg:w-[40%] xl:w-[45%]  md:mx-auto justify-center center items-center  lg:mx-16 '>
                   
              <img src={profile} alt=""
                    className=' sm:w-[300px] md:w-auto rounded lg:rounded-none mx-auto lg:mt-10' />
                </div>

{/* introduction  */}
                <div  className='lg:w-[50%] xl:w-[60%] w-[100%] py-5'>
                    <p className='text-green-600 text-3xl'>Who am i ..?</p><br />
                    <p className='text-white font-extrabold text-3xl'>I'm Tabinda Noor Certified Ethical Hacker and Web Developer </p> <br />
                    
                    <p className='text-zinc-400 '>Hello, I'm Tabinda Noor, a passionate and dedicated MERN stack developer with a Bachelor's degree in Software Engineering. Proficient in Tailwind CSS, MongoDB, Express.js, React.js, and Node.js. I specialize in MERN Stack, building dynamic and responsive web applications. With a passion for creating seamless user experiences and a commitment to staying updated with the latest technologies, I bring a valuable blend of expertise in both front-end and back-end development. I'm also committed to continuous learning, recently delving into AI and advanced web technologies. I look forward to leveraging my skills to contribute to innovative projects and drive impactful solutions.</p>
                    <br />
                    <hr className=' border-t-[2] border-t-gray-500' />
                    <br />
                    <div className='flex-col flex lg:flex-row justify-between'>
                        <div className='flex'>
                            <b className='mr-4'>Name:</b>
                            <p>Tabinda Noor</p>
                        </div>
                        <div className='sm:flex '>
                        <b className='mr-4'>Email:</b>
                      <p>tabindanoor415@gmail.com</p>
                        </div>
                    
                    </div><br />
                    <div className='flex-col flex lg:flex-row justify-between' >
                        <div className='flex'>
                            <b className='mr-4'>Age:</b>
                            <p>{calculateAge()} </p>
                        </div>
                        <div className='flex'>
                        <b className='mr-4'>From:</b>
                      <p>Faisalabad,Pakistan</p>
                        </div>
                    
                    </div>
    
                   
                    
                    <br />
{/* dounload cv button */}
                    <div className='flex-col flex md:flex-row text-center justify-center lg:justify-between'>

                      {/* getting secure from people  */}
                        <a href={res}  download="Resume" className='xl:w-1/3 px-5 rounded-full text-white bg-green-600 py-3 lg:h-1/2  xl:px-3 2xl:px-9'>Download CV</a>



                        {/* <a href="mailto:tabindanoor415@gmail.com"  download="Resume" className='xl:w-1/3 px-5 rounded-full text-white bg-green-600 py-3 lg:h-1/2  xl:px-3 2xl:px-9'>Download CV</a> */}


                        {/* line  */}
                        <hr className=' border-t-[2] border-t-gray-500 w-20 mt-10 sm:mt-5 mx-auto  ' />
                        {/* social media icons */} 
                        <div className=' flex mt-10    sm:mt-2 justify-between'>
{/* <!-- Twitter --> */}
<a href="https://twitter.com/its_t_noor"   rel="noreferrer" target='_blank'><svg

  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 mb-5 mx-3"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
</svg> </a>


{/* <!-- Facebook --> */}
<a href="https://www.facebook.com/profile.php?id=100080879324307"   rel="noreferrer" target='_blank'>
<svg

  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 bg-white rounded-sm p-[2px] mb-5 mx-3"
  fill=""
  viewBox="0 0 24 24">
  <path
    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
</svg>
</a>
{/* <!-- Linkedin --> */}
<a href="https://www.linkedin.com/in/tabinda-noor-54b478246/"   rel="noreferrer" target='_blank'>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 bg-white rounded-sm p-[2px] mb-5 mx-3"
  fill=""
  viewBox="0 0 24 24">
  <path
    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
</svg>
</a>
{/* <!-- Github --> */}
<a href="https://github.com/Tabindanoor"   rel="noreferrer" target='_blank'>
<svg

  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 mb-5 mx-3"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
</svg>
</a>


        
                        </div>
                    </div>

                </div>
            </div>
            {/* end of who am i section */}

<br />
                {/* my services */}
                {/* <div className=' mx-6 lg:mx-36 '> */}
                <div className=' mx-6 lg:mx-20 '>
                    <p className='text-slate-500'>services i offer to my clients</p>
                    <br />
                    <p className='text-4xl font-bold'>My Services</p>
                    <br /><br />

{/* using the cards in the page  */}
                   


                       
                 
                </div>

                <div className='grid md:grid-cols-2 xl:grid-cols-3 justify-between mx-6 sm:mx-28 md:mx-12 text-center ' >
                        
                       
                          {cardData}
                    </div>

<br />
                                                    {/* testimonials */}
                <div className=' mx-6 lg:mx-20'>
                    <p className='text-slate-500'> What my clients think about me</p>
                    <br />
                    <p className='text-4xl font-bold'>Testimonials</p>
                    <br />
                </div>

         

 {/* cards for testimonial */}



    <div
          className="card  mx-8 lg:mx-44" >
          <div className="h-full bg-slate-900 p-8 rounded ">
          <div className='flex justify-between'>
            <div className='flex '>
            <img alt="testimonial" src={testimonial[currentIndex].img} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-white ">{testimonial[currentIndex].name}</span>
              <span className="text-gray-400 text-sm">{testimonial[currentIndex].title}</span>
            </span>
            </div>
          

            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          </div>
          <br />
          
          <p className="leading-relaxed mb-6">{testimonial[currentIndex].description}</p>
          
        </div> 
        </div>

<br />
<div className="text-center font-semibold text-6xl">
<button className="btn"  onClick={handlePrev}>&deg;</button>
  <button className="btn " onClick={handleNext}>&deg;</button>
</div>


    <div className=' lg:mx-20 xl:mx-36 mx-6 '>
      
                    <p className='text-slate-500'>Get started with my services</p>
                    <br />
                    <p className='text-4xl font-bold'>Choose a Plan</p>
                    

                                                                  {/*   cards tp choose a plan*/}


    </div>

    

        <br />


        <div className='grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 mx-6 lg:mx-8 '>

        <div className=" px-4 lg:px-6 ">
        <div className="">
            {/* <!-- Pricing Card --> */}
    
            <div className=" justify-center flex flex-col p-5 md:p-12 lg:p-12 xl:p-24   mx-auto max-w-lg text-center text-white bg-gray-900  rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 ">


            
              <TbPremiumRights
                className='text-green-600
                            text-6xl
                            text-center
                            mx-auto
                             '

              />


            <br />
                <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">$20</span>
                    <span className="text-gray-500 dark:text-gray-400">/hour</span>
                </div>
                {/* <!-- List --> */}
                <ul  className="mb-8 space-y-4 text-left">
                    <li className="flex mx-auto text-center justify-center items-center space-x-3 ">
                       
                        <span>Simple static website </span>
                    </li>
                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        
                        <span>Responsive Design</span>
                    </li>
                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        
                           
                        <span>Basic contact form</span>
                    </li>
                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <span>logo/banner design </span>
                        
                       
                    </li>

                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <span>Web Design</span>
                        
                       
                    </li>
                    
                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        
                        <span>24/7 Support</span>
  
                    </li>
                </ul>
                {/* <a href="mailto:tabindanoor415@gmail.com">Get started</a> */}
               

                <EmailButton email={pricing.email}   />
             
            </div>
                <br /> <br />   
        </div>
    </div>

    <div className=" px-4 lg:px-4 ">
        <div className="">
            {/* <!-- Pricing Card --> */}
    
            <div className="  justify-center flex flex-col p-5 md:p-12 lg:p-12 xl:p-24   mx-auto max-w-lg text-center text-white bg-gray-900  rounded-lg shadow dark:border-gray-600  dark:bg-gray-800  ">
             

            <TbPremiumRights
                className='text-green-600
                            text-6xl
                            text-center
                            mx-auto
                             '

              />

            <br />
                <h3 className="mb-4 text-2xl font-semibold">Standard</h3>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">$40</span>
                    <span className="text-gray-500 dark:text-gray-400">/hour</span>
                </div>
                {/* <!-- List --> */}
                <ul  className="mb-8 space-y-4 text-left">
                    <li className="flex mx-auto text-center justify-center items-center space-x-3 ">
                       
                        <span>Dynamic website</span>
                    </li>
                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        
                        <span>Responsive Design</span>
                    </li>
                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        
                           
                        <span>Basic contact form</span>
                    </li>
                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <span>logo/banner design </span>
                        
                       
                    </li>

                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <span>Web Design</span>
                        
                       
                    </li>
                    
                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        
                        <span>24/7 Support</span>
  
                    </li>
                </ul>

                <EmailButton email={pricing.email}   />
                
            </div>
                <br /> <br />   
        </div>
    </div>


     <div className=" px-4 lg:px-6 ">
        <div className="">
            {/* <!-- Pricing Card --> */}
    
            <div className="  justify-center flex flex-col p-5 md:p-12 lg:p-12 xl:p-24   mx-auto max-w-lg text-center text-white bg-gray-900  rounded-lg shadow dark:border-gray-600  dark:bg-gray-800  ">
              {/* <img src={item.image} alt="" /> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wordpress  h-12 w-12 mx-auto  bg-dark text-green-600" viewBox="0 0 16 16"> <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137 6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z"/> <path d="M6.061 14.583 8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706 0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"/> <pat fillRule="evenodd" d="M0 8c0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8zm.367 0c0 4.209 3.424 7.633 7.633 7.633 4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8z"/> </svg> */}




              <TbPremiumRights
                className='text-green-600
                            text-6xl
                            text-center
                            mx-auto
                             '

              />

            <br />
                <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">$60</span>
                    <span className="text-gray-500 dark:text-gray-400">/hour</span>
                </div>
                {/* <!-- List --> */}
                <ul  className="mb-8 space-y-4 text-left">
                <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        
                        <span>Full-stack website</span>
                    </li>

                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        
                           
                        <span>Responsive Design</span>
                    </li>

                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        
                           
                        <span>Basic contact form</span>
                    </li>
                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <span>logo/banner design </span>
                        
                       
                    </li>

                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <span>Web Design</span>
                        
                       
                    </li>
                    
                    <li className="flex mx-auto text-center justify-center items-center space-x-3">
                        {/* <!-- Icon --> */}
                        
                        <span>24/7 Support</span>
  
                    </li>
                </ul>

                <EmailButton email={pricing.email}   />
               
            </div>
                
        </div>
    </div>
        </div>

<Footer/>

        </div>   
    </div>
  )
}

export default About
                                               