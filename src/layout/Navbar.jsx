import React from 'react'
import {ArrowRightIcon} from '@heroicons/react/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';

const Navbar = () => {
  return (
    <header className='bg-gray-800 md:sticky top-0 z-10'>
      <div className="w-full flex items-center justify-between px-6 py-4">
        <div className=' font-medium text-white mb-4 md:mb-0'>
          <a href='#about' className='ml-3 text-base md:text-xl'>
             Bhagyashri Khond
          </a>
        </div>
          <nav className="flex flex-wrap justify-end gap-3 text-xs md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-8 md:text-base">

            <a href="#home" className='  text-white'>Home</a>
            <a href="#about" className='  text-white'>About</a>
            <a href="#projects" className='  text-white'>Projects</a>
            <a href="#skills" className='  text-white'>Skills</a>




           </nav>
           <div className="flex items-center gap-3 text-white">
          <a href="https://github.com/Bhagyashri723" target="_blank">
           <FaGithub className="w-5 h-5" />
          </a>

           <a href="https://www.linkedin.com/in/bhagyashrikhond/" target="_blank">
         <FaLinkedin className="w-5 h-5" />
          </a>

           <a 
            href="/resume.pdf"
            target="_blank"
            className=""
            >
         <HiOutlineDocumentText style={{ width: "20px", height: "20px" }} />
      
         </a>
        </div>
        </div>
       </header>
  );
}

export default Navbar;