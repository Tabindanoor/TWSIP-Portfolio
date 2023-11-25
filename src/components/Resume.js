import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

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
// experience object 

 const experience = [
  {
    title:"Programmmer",
    subtitle:"Corvit Systems Faisalabad",
    description:"Using python programming Language, Manage the instances of AWS using python scripts .",
  },
  {
    title:"MERN Bootcamper ",
    subtitle:"Techloset Solutions / 02-20-2023 - 24-08-2023",
    description:"Maintainable code using HTML, CSS, and React JS along  with the Tailwind CSS.  ",
  }, {
    title:"Web Developer Instructor ",
    subtitle:"ITEC Systems Faisalabad / 25-08-2022 - 01-02-2023 ",
    description:"With the experience as a web instructor, I have gained invaluable insights into the art of guiding and     educating aspiring web developers.",
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
          
          
<br /><br />
              <br /><br /><br />
            <div className='mx-auto text-center'>
                <p className='text-gray-400'>Check out my Resume</p>
                <br />
                <p className='font-bold text-5xl'>Resume</p>
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
                         {/* education and experience  */}

              
  <div className="flex-col flex lg:flex-row   justify-between  mx-5 lg:mx-36">
  {/* education */}
  <div className='mx-5 md:w-[50%] '>
    <div className=" w-full ">
      <p className='font-semibold text-4xl'>Education</p> <br />
      <EducationCard/>
    </div>
  </div>
    
    {/* experience */}
    <div className='mx-5 md:w-[50%] '>
    <div className=" w-full ">
      <p className='font-semibold text-4xl'>Experience</p> <br />
      <ExperienceCard/>
    </div>
  </div>
  </div>

<br /><br /><br />

             {/*level of knowledge  */}
             <div className='mx-5 lg:mx-36'>
              <div className='mx-5'>
        
               <p>My level of knowledge in some tools</p>
<br />
              <p className='text-4xl font-semibold'>My Skills</p>
              </div> <br /> <br />
             
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
<br /><br /><br /><br /><br />


             </div>

              </div>
            
         

             

             </div>
                {/* take a tiur to the office */}

<div className='flex-col flex lg:flex-row justify-between md:mx-40 mx-5'>

      <div className='mx-2 lg:w-[50%]'>
        <br /> <br />
          <p className='text-3xl font-semibold '>Know More About Me</p> <br /> <br />
          <p>Currently i am doing bachelors in Software Engineering from Government College University Faisalabad.</p><br />
          <p>I love to solve complex problems, i love traveeling and reading books. I am interested in learning new and innovative skills and want to keep myself updated with the technology trends.</p>
      </div>
      <div className='mx-3 lg:w-[50%]'>
      {/* <div class="aspect-w-16 aspect-h-9">
  <iframe src="https://www.youtube.com/embed/doteMqP6eSc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div> */}
  {/* <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.youtube.com/embed/doteMqP6eSc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div> */}
    
    <iframe  className='  w-full  h-[315px]' width="560" height="315" src="https://www.youtube.com/embed/suiOEagu6-M?si=SzIcl6WspQrFpdc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
{/* <iframe  className='  w-full  h-[315px]' src="https://www.youtube.com/embed/doteMqP6eSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      </div>
</div>  <br /><br /><br /><br />

          
            </div>


 


          
  
  )
}

export default Resume
