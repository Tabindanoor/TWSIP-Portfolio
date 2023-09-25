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
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
  },
  {
    title:"Intermediate",
    subtitle:"Kips College / 2018 - 2020",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
  },
  {
    title:"Bachelors degree",
    subtitle:"GC University / 2020 - Present",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
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
    title:"Software Engineer",
    subtitle:"Programmer / sep 2022 - Oct 2022",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
  },
  {
    title:"Cyber Security Analyst",
    subtitle:"GCUF / Aug 2022 - sep 2022",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
  }, {
    title:"Networking",
    subtitle:"UAF / july 2022 - july 2022",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
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

              
  <div className="flex-col flex lg:flex-row  justify-between  mx-5 lg:mx-36">
  {/* education */}
  <div className='mx-5 '>
    <div className=" w-full ">
      <p className='font-semibold text-4xl'>Education</p> <br />
      <EducationCard/>
    </div>
  </div>
    
    {/* experience */}
    <div className='mx-5'>
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
  <span className="text-base font-medium text-white">Ethical Hacking</span>
  <span className="text-sm font-medium text-white">80%</span>
</div>
<div className=" rounded-full h-2.5 bg-gray-700 mx-5">
  <div className="bg-green-600 h-2.5  w-[80%]" ></div>
</div>
    </div> <br />

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
             </div>


             <div className='w-full'>

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
<br /><br /><br /><br /><br />


             </div>

              </div>
            
         

             

             </div>
                {/* take a tiur to the office */}

<div className='flex-col flex lg:flex-row justify-between md:mx-40 mx-5'>

      <div className='mx-2 lg:w-[50%]'>
        <br /> <br />
          <p className='text-3xl font-semibold '>Take a tour of my office</p> <br /> <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia cum quasi assumenda culpa praesentium consectetur voluptatibus expedita. Voluptatem tempore, aspernatur rem facilis, distinctio nemo! Odio velit, nemo dolorem voluptas!</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui aspernatur unde mollitia, in laborum.</p>
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
<iframe  className='  w-full  h-[315px]' src="https://www.youtube.com/embed/doteMqP6eSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
</div>  <br /><br /><br /><br />

          
            </div>


 


          
  
  )
}

export default Resume
