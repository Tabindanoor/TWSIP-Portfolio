import React from 'react'
import { Link } from 'react-router-dom'


const CopyrightYear = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <div className='text-center text-white'>
        &copy; {currentYear} Made By Tabindanoor ❤️
      </div>
    );
  };


const Footer = () => {
  return (
    <div className='bg-black'>
<div className='bg-black text-white text-base p-4 xl:p-12   xl:pl-[65px]  xl:pr-[96px] 2xl:pl-[106px] 2xl:pr-[187px]'>
                <div className='flex justify-between  list-none max-xl:flex-col max-xl:gap-6 text-white items-center'>
                    <div >
                        {/* <li className='mb-6'> <img  className="alex" src={footer}   alt='alex'/></li> */}
                        <b>Software Engineer</b>
                        <li className='max-xl:hidden text-sm  opacity-70 font-sans text-[#F6F6F6]'>tabindanoor415@gmail.com</li>
                    </div>
                    <div className='flex gap-6  xl:hidden'>
                        <div>

                        <a href="https://github.com/Tabindanoor"   rel="noreferrer" target='_blank'>
<svg

  xmlns="http://www.w3.org/2000/svg"
  className="h-8 w-8"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
</svg>
</a>
                    
                        </div>

                        <div> 
                        <a href="https://www.linkedin.com/in/tabinda-noor-935429237/"   rel="noreferrer" target='_blank'>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-8 w-8 bg-white rounded-sm p-[2px] mb-5 mx-3"
  fill=""
  viewBox="0 0 24 24">
  <path
    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
</svg>
</a>
                        </div>

                    </div>



                    <div className='flex  justify-between gap-28 text-base max-sm:gap-10'>
                        <div className=''>
                         <Link to={"/about"}>  <li className='mb-6 px-4 py-2 font-sans '>About</li></Link> 
                         <Link to={"/portfolio"}> <li className='px-4 py-2 '>Portfolio</li> </Link>
                        </div>
                        <div>
                        <Link to={"/resume"}><li className='mb-6 px-4 py-2 font-sans'>Resume</li></Link> 
                        <Link to={"/contact"}> <li className='font-sans px-4 py-2'>Contact</li></Link> 
                        </div>


                        <div className=' max-xl:hidden '>
                            <li className='mb-6 flex gap-4'> 
                            <a href="https://twitter.com/its_t_noor"   rel="noreferrer" target='_blank'><svg

                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5  mx-3 mt-3"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg> </a>
                                <h1 className='font-sans px-4 py-2'> 
                                 Twitter</h1></li>


                            <li className='flex gap-4'>
                            <a href="https://github.com/Tabindanoor"   rel="noreferrer" target='_blank'>
<svg

  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 mb-5 mx-3 "
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
</svg>
</a>
                            <h1 className='font-sans px-4  '>  Github</h1></li>



                              <div className=' flex mt-10    sm:mt-2 justify-between'>
                         </div>
                        </div>

                        <div className=' max-xl:hidden '>
                            <li className='mb-6 flex gap-4'> 
                            <a href="https://www.facebook.com/profile.php?id=100080879324307"   rel="noreferrer" target='_blank'>
<svg

  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 bg-white rounded-sm p-[2px] mb-5 mx-3 mt-3"
  fill=""
  viewBox="0 0 24 24">
  <path
    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
</svg>
</a>
                                <h1 className='font-sans px-4 py-2'> 
                                 Facebook</h1></li>


                            <li className='flex gap-4'>
                            <a href="https://www.linkedin.com/in/tabinda-noor-935429237/"   rel="noreferrer" target='_blank'>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 bg-white rounded-sm p-[2px] mb-5 mx-3 "
  fill=""
  viewBox="0 0 24 24">
  <path
    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
</svg>
</a>
                            <h1 className='font-sans px-4 '>  LinkedIn</h1></li>



                              <div className=' flex mt-10    sm:mt-2 justify-between'>
       
                        </div>
                        </div>
                    </div>

            </div>
                <li className='text-[#F6F6F6] text-sm xl:hidden opacity-70 list-none text-center font-sans mt-5'>tabindanoor415@gmail.com</li>
                
      </div>
      <CopyrightYear/>
      <br />
    </div>
  )
}

export default Footer