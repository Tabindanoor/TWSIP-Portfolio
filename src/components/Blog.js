import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
const Blog = () => {
    const [progress, setProgress] = useState(0);
    // animated line 
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 101);
    }, 50);

    return () => clearInterval(timer);
  }, []);

   const blogs =[
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-1.jpg",
        date:"11 Dec, 20",
        title:"Top tools for Photographers",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    },
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-2.jpg",
        date:"11 Dec, 20",
        title:"Top tools for Photographers",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    },
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-3.jpg",
        date:"11 Dec, 20",
        title:"Top tools for Photographers",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    }
    ,
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-4.jpg",
        date:"11 Dec, 20",
        title:"Top tools for Photographers",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    },
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-5.jpg",
        date:"11 Dec, 20",
        title:"Top tools for Photographers",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    },
    {
        img:"https://kaleidoscopic-pie-2341a3.netlify.app/template/img/post-6.jpg",
        date:"11 Dec, 20",
        title:"Top tools for Photographers",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas."
    }
   ]

   const MyBlogCards =()=> {
   return blogs.map((blog,index)=>{
        return (
            <div key={index} className="max-w-sm mx-auto overflow-hidden shadow-md">
            <div className="relative">
               <img
              className="w-full"
              src={blog.img}
              alt="BlogImage"
            /> 
            <button className="absolute bottom-0 left-0 p-2 text-white bg-green-500 rounded-md">{blog.date}</button>
                
              </div>
              <div className='text-white'>
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
<br /><br /><br /><br />

    </div>
  )
}

export default Blog
