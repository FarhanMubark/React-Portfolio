import React from 'react'
import personalImage from '../assets/personalImage.jpeg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
import { useState } from 'react'
function Home() {
  const [text, setText] = useState("I'm a Full Stack Developer");

  const handleClick = () => {
    if (text === "I'm a Full Stack Developer") {
      setText("Hi, I'm Farhan");
    } else {
      setText("I'm a Full Stack Developer");
    }
  };
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-blue-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col
       items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-6xl font-bold mt-[100px] text-white '>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md animate-typing'>
            I have experience in designing and developing web-based applications using modern web technologies, frameworks, and tools.
            </p>
            <div>
                <Link to='projects' smooth duration={400} className='group text-white w-fit px-6 py-3 my-3
                 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                    Projects
                    <span className='group-hover:rotate-90 hidden md:block duration-200'>
                        <MdKeyboardArrowRight size={25} className='ml-3' />
                    </span>
                </Link>
            </div>
        </div>
        <div className='mb-[100px] lg:mb-[30px]'>
            <img src={personalImage} alt="hero image" className='rounded-3xl mx-auto w-2/3 md:w-full pl-3'  />
        </div>
      </div>
    </div>
  )
}

export default Home
