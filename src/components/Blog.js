import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import glasses from "../images/glasses.png"
const Blog = () => {
    const [progress, setProgress] = useState(0);
    // animated line 
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 50);

    return () => clearInterval(timer);
  }, []);


// https://brighttechvisions.com/why-should-robots-go-to-space-instead-of-humans/


// https://brighttechvisions.com/nfs-network-file-system/

// https://brighttechvisions.com/how-to-become-a-cloud-engineer/

// https://brighttechvisions.com/see-the-future-now-with-ray-ban-meta-smart-glasses/

// https://brighttechvisions.com/cybersecurity-experts/


// https://brighttechvisions.com/can-robots-have-emotions-or-consciousness/


// https://brighttechvisions.com/ai-assistant-vs-human-assistant/


// https://brighttechvisions.com/why-gadgets-are-essential-in-the-digital-age/ 


   const blogs =[
    {
        img:"https://technofeat.net/wp-content/uploads/2023/09/T-2-1.webp",
        link:"https://technofeat.net/ray-ban-meta-smart-glasses-a-glimpse-into-the-future-of-technology/",
        date:"11 Dec, 2022",
        title:"  5 Reasons Why Should Robots go to Space Instead of Humans",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    },
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-2.jpg",
        link:"https://technofeat.net/ray-ban-meta-smart-glasses-a-glimpse-into-the-future-of-technology/",
        date:"11 Dec, 2022",
        title:"NFS (Network File System): Simplifying File Sharing Across Networks",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    },
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-3.jpg",
        link:"https://technofeat.net/ray-ban-meta-smart-glasses-a-glimpse-into-the-future-of-technology/",
        date:"11 Dec, 2023",
        title:"Cloud Engineer        ",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    }
    ,
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-4.jpg",
        link:"https://technofeat.net/ray-ban-meta-smart-glasses-a-glimpse-into-the-future-of-technology/",
        date:"11 Dec, 2023",
        title:"See the Future Now with Ray-Ban Meta Smart Glasses        ",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    },
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-5.jpg",
        link:"https://technofeat.net/ray-ban-meta-smart-glasses-a-glimpse-into-the-future-of-technology/",
        date:"11 Dec, 2023",
        title:"10 Surprising Facts about CyberSecurity Experts         ",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    },
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-6.jpg",
        link:"https://technofeat.net/ray-ban-meta-smart-glasses-a-glimpse-into-the-future-of-technology/",
        date:"11 Dec, 2023",
        title:"Can robots have emotions or consciousness?",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    }, {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-6.jpg",
        link:"https://technofeat.net/ray-ban-meta-smart-glasses-a-glimpse-into-the-future-of-technology/",
        date:"11 Dec, 2023",
        title:"AI Assistant vs. Human Assistant: Which One is Better?",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    },
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-6.jpg",
        link:"https://technofeat.net/ray-ban-meta-smart-glasses-a-glimpse-into-the-future-of-technology/",
        date:"11 Dec, 2023",
        title:"Why gadgets are essential in the digital age",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    },
   ]

   const MyBlogCards =()=> {
   return blogs.map((blog,index)=>{
        return (
            <div key={index} className="max-w-sm mx-auto overflow-hidden shadow-md">
        <Link  to={blog.link}>    <div className="relative">
               <img
              className="w-full"
              src={blog.img}
              alt="BlogImage"
            /> 
            <a href='https://technofeat.net/ray-ban-meta-smart-glasses-a-glimpse-into-the-future-of-technology/' className="absolute bottom-0 left-0 p-2 text-white bg-green-500 rounded-md">{blog.date}</a>
                
              </div>
              

              </Link>
               <div className='text-white' >
{/* {blog.link} */}
                  <p className='text-2xl font-bold'>{blog.title}</p>
                  <p>{blog.description}</p>
              </div>
          
            
          </div>
        )
    })
   }

  return (
    <div className='bg-black'>
       {/* cross icon */}
            
       <div className='sticky font-bold top-6 right-6 z-10 lg:mx-5 xl:mx-16   mx-auto'>
            <Link to="/" className="bubbly-link">  <svg  className=" absolute top-0 right-0  text-8xl cursor-pointer  h-9  text-white font-bold"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg></Link>
          
            </div>
          
          
<br /><br />
              <br /><br /><br />
            <div className='mx-auto text-center'>
                <p className='text-gray-400'>Check out my latest blog posts</p>
                <br />
                <p className='font-bold text-5xl text-white'>My Blog</p>
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

<div className='grid  md:grid-cols-2 lg:grid-cols-3 mx-8 lg:mx-24 xl:mx-36 gap-x-4 gap-y-20   '>
    <MyBlogCards/>
</div>

<br />
<div className='grid  md:grid-cols-2 lg:grid-cols-3 mx-8 lg:mx-24 xl:mx-36 gap-x-4 gap-y-20'>
<div className="max-w-sm mx-auto overflow-hidden shadow-md">
        <a href='https://technofeat.net/ray-ban-meta-smart-glasses-a-glimpse-into-the-future-of-technology/' rel='noreferrer'  target='_blank'  >    <div className="relative">
               <img
              className="w-full"
              src="https://technofeat.net/wp-content/uploads/2023/09/T-2-1.webp"
              alt="BlogImage"
            /> 
            <a href='https://technofeat.net/ray-ban-meta-smart-glasses-a-glimpse-into-the-future-of-technology/' className="absolute bottom-0 left-0 p-2 text-white bg-green-500 rounded-md">11 Dec, 2022</a>
                
              </div>
              

              </a >
               <div className='text-white' >
{/* {blog.link} */}
                  <p className='text-2xl font-bold'> 5 Reasons Why Should Robots go to Space Instead of Humans</p>
                  <p>Why Should Robots go to Space Instead of Humans? Robots can be a very good fit to be sent in space instead of humans..</p>
              </div>
          
            
          </div>
</div>
<br /><br /><br /><br />

    </div>
  )
}

export default Blog