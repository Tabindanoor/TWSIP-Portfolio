import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import mern from "../images/mern.jpg"
import Footer from './Footer';
const Resume = () => {
    const [progress, setProgress] = useState(0);
    // animated line 
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 50);

    return () => clearInterval(timer);
  }, []);


  // education 
 const education = [
  {
    title:"Matriculation",
    subtitle:"Muslim Girls School / 2016 - 2018",
    description:"Matriculation with Computer Science, scored 94% in exams. Learned the basic of C language and Object Oriented Programming.",
  },
  {
    title:"ICS",
    subtitle:"Kips College / 2018 - 2020",
    description:"Intermediate in Computer Science, scored 92% in exams. Learned C++ language and practically worked on OOP concepts.",
  },
  {
    title:"BSSE",
    subtitle:"GC University Faisalabad / 2020 - 2024",
    description:"Bachelors in Software Engineering, learned Software Development. Learned enhanced concepts in programming. Selected MERN as a future field.",
  }
 ]

 const EducationCard =()=>{
  return education.map((item,index)=>{
    return (
      <div key={index} >
      <div className="border-l-2 mx-auto  center bg-gray-900 border-green-500 p-4 flex flex-col justify-between  leading-normal">
        <div className="mb-8">
          
          <div className="text-3xl font-semibold ">{item.title}</div>
          <p className='mt-2'>{item.subtitle}</p> 
          <p className="mt-3">{item.description}</p>
        
        </div>
      
      </div>
      <hr />
      </div>
      )
    })
 }
// experience object 

 const experience = [
  {
    title:"Programmmer",
    subtitle:"Corvit Systems Faisalabad / 25-07-2022 - 20-08-2022",
    description:"Using python programming Language, Manage the instances of AWS using python scripts .",
  },
  {
    title:"MERN Bootcamper ",
    subtitle:"Techloset Solutions / 02-20-2023 - 24-08-2023",
    description:"Maintainable code using React JS, Express and Node JS, along  with the Tailwind CSS ,MongoDB and firebase.  ",
  }, {
    title:"Web Developer Instructor ",
    subtitle:"ITEC Systems Faisalabad / 25-08-2022 - 01-02-2023 ",
    description:"With the experience as a web instructor, I have gained invaluable insights into the art of guiding and     educating aspiring web developers.",
  },
  {
    title:"Selenium with JAVA training ",
    subtitle:"HCC TECHNOLOGY FOUNDATION / JULY 2023 - SEPT 2023 ",
    description:"With the experience trainee, I have gained expertise in web scraping using JAVA and python. Learned Testing techniques on Web Applications",
  }
  
 ]

const ExperienceCard = ()=>{
  return experience.map((item,index)=>{
    return (
      <div key={index} >
      <div className="border-l-2 bg-gray-900 border-green-500 p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          
          <div className="text-3xl font-semibold ">{item.title}</div>
          <p className='mt-2'>{item.subtitle}</p> 
          <p className="mt-3">{item.description}</p>
        
        </div>
      
      </div>
      <hr />
      </div>
        )
        })
}

  return (
  
        
        <div className='bg-black text-white '>
        {/* cross icon */}
            
            <div className='sticky font-bold top-6 right-6 z-10 lg:mx-5 xl:mx-16   mx-auto'>
            <Link to="/" className="bubbly-link">  <svg  className=" absolute top-0 right-0  text-8xl cursor-pointer  h-9  text-white font-bold"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg></Link>
          
            </div>
          
 
              <br /><br /><br />
            <div className='mx-auto text-center'>
                <p className='text-gray-400'>Check out my Resume</p>
                <br />
                <p className='font-bold text-5xl'>Resume</p>
            </div>
            <br />

           {/* animated line */}

            <div className="relative h-2  w-24 mx-auto bg-black-200">
                <div
                className="absolute top-0 left-0 h-full bg-green-500"
                style={{ width: `${progress}%` }}
                />
              
            </div>
           <br /><br />
                         {/* education and experience  */}


    <div className='mx-8 lg:mx-36'>
        
        <p className='text-gray-400'>My Education & Experiences</p>
<br />
       </div>
              
  <div className="flex-col flex lg:flex-row   justify-between  mx-8 lg:mx-36">
  {/* education */}

  <div className='lg:mx-5 lg:justify-between lg:w-[50%]  mx-auto justify-center'>
    <div className=" w-full ">
    <br className='lg:hidden ' />
    <p className='text-4xl font-semibold  '>Education</p><br />
      <EducationCard/>
    </div>
  </div>
    
    {/* experience */}
    <div className='lg:mx-5 lg:justify-between lg:w-[50%]  mx-auto justify-center'>
    <div className=" w-full ">
      <br className='lg:hidden ' />
      <p className='font-semibold text-4xl'>Experience</p> <br />
      <ExperienceCard/>
    </div>
  </div>


  </div>

<br /><br />

             {/*level of knowledge  */}
             <div className='mx-8 lg:mx-36'>
              <div className=''>
        
               <p className='text-gray-400'>My level of knowledge in some tools</p>
<br />
              <p className='text-4xl font-semibold'>My Tech Stack</p>
              </div> 
              
              <br /> <br />
             
             {/* skills with percentages  */}
             <div className='flex-col flex md:flex-row '>

           
              
            
             <div className='w-full'>

              <div>
                   <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">HTML/CSS</span>
  <span className="text-sm font-medium text-white">95%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[95%]" ></div>
</div>
              </div>
              <br />
              <div>
  <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">JavaScript</span>
  <span className="text-sm font-medium text-white">90%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[90%]" ></div>
</div>

</div>

<br />
<div>
  <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">MUI</span>
  <span className="text-sm font-medium text-white">80%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[80%]" ></div>
</div>

</div>

<br />
<div>
  <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">FireBase</span>
  <span className="text-sm font-medium text-white">80%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[80%]" ></div>
</div>

</div>

<br />


    <div>
      <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">TypeScript</span>
  <span className="text-sm font-medium text-white">80%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[80%]" ></div>
</div>
    </div> <br />


<div>
                   <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">Git / GitHub</span>
  <span className="text-sm font-medium text-white">90%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[90%]" ></div>
</div>
              </div>

              <br />
<div>
                   <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">Networking</span>
  <span className="text-sm font-medium text-white">80%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[80%]" ></div>
</div>
              </div>


              <br />
<div>
                   <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">Socket.io</span>
  <span className="text-sm font-medium text-white">70%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[80%]" ></div>
</div>
              </div>
             </div>


             <div className='w-full'>

              <div>
                   <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">OOP</span>
  <span className="text-sm font-medium text-white">80%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[80%]" ></div>
</div>
              </div><br />
              <div>
                   <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">Bootstrap</span>
  <span className="text-sm font-medium text-white">90%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[90%]" ></div>
</div>
              </div><br />
              
           

    <div>
      <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">Tailwind CSS</span>
  <span className="text-sm font-medium text-white">95%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[95%]" ></div>
</div>
    </div>
<br />
<div>
  <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">React JS</span>
  <span className="text-sm font-medium text-white">80%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[80%]" ></div>
</div>

</div>
<br />
<div>
                   <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">Node JS / Express JS</span>
  <span className="text-sm font-medium text-white">70%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[70%]" ></div>
</div>
              </div>
              <br />
<div>
                   <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">Mongo DB</span>
  <span className="text-sm font-medium text-white">70%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[70%]" ></div>
</div>
              </div>
              <br />
<div>
                   <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">Ethical Hacking</span>
  <span className="text-sm font-medium text-white">75%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[75%]" ></div>
</div>
              </div>
              <br />

<div>
                   <div className="flex justify-between mb-1 mx-5">
  <span className="text-base font-medium text-white">Redux Toolkit</span>
  <span className="text-sm font-medium text-white">85%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[80%]" ></div>
</div>
              </div>


<br /><br />


             </div>

              </div>
            
         

             

             </div>

               {/* Certifications Section */}
      <div className='mx-8 lg:mx-36 text-gray-400'>
      <div className=''>
        
        <p className='text-gray-400'>My Achievements</p>
<br />
       <p className='text-4xl font-semibold text-white'>Certifications</p>
       </div>

<br />
        <div className='list-disc ml-5 mt-2 text-gray-300'>
          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>JavaScript Certification From Coursera </p>
          </div>

          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>MERN Bootcamp Certification (Techloset Solutions)</p>
          </div>

          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>CS50x Puzzle Solver </p>
          </div>

          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>WordSprint 3.0 winner  </p>
          </div>

         

          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>Microsoft C# .NET Training Certification</p>
          </div>

          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>Soft Skills Business Bootcamp </p>
          </div>

          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>Lablab.ai 24 Claude Hackathon </p>
          </div>


          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>Lablab.ai Gemini Hackathon  </p>
          </div>


          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>Testing with Selenium (HCC Training Bootcamp) </p>
          </div>


          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>Wordpress Training (DigiSkills) </p>
          </div>

          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>Graphics Designing  (DigiSkills) </p>
          </div>


          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>Python Programming (Stanford University Code In Place) </p>
          </div>


          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>Computer Networking Certification</p>
          </div>

          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>Cyber Security Certification</p>
          </div>

          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>NSE-1 and NSE-2 Certification</p>
          </div>

          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>HCIA Security Certification</p>
          </div>

          <div className='flex '>
            <div className='w-4 h-4 bg-green-600 rounded-full mt-1 mr-3'></div>
            <p>HCIA Cloud Computing Certification</p>
          </div>

          
        </div>
      </div>
      
      <br/>
      <br/>
                {/* take a tiur to the office */}

<div className='flex-col flex xl:flex-row justify-between mx-8 lg:mx-36 '>

      <div className=' xl:w-[50%] w-full'>

          <p className='text-4xl font-semibold  '>Know More About Me</p> <br /> 
          <p className='text-gray-300'>Currently i am doing bachelors in Software Engineering from Government College University Faisalabad.</p><br />
          <p className='text-gray-300'>I love to solve complex problems, i love traveling and reading books. I am interested in learning new and innovative skills and want to keep myself updated with the technology trends.</p>
          <p className='text-gray-300'>I have also joined many remote internships which help me to enhance my skills in the Development.</p>
          <br />
      </div>
      <div className='xl:mx-3 w-full xl:w-[50%]'>
    <img src={mern} alt="" />
       </div>
</div>  





<br />
<Footer/>
          
            </div>


 


          
  
  )
}

export default Resume
