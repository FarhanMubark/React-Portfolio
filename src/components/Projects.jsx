import React from 'react'
import DashImage from '../assets/portfolio/dashboard.png'
import JWT from '/Users/farhan/React-projects/farhan-portfolio/src/assets/portfolio/JWT.png'
import MUIDash from '/Users/farhan/React-projects/farhan-portfolio/src/assets/portfolio/MUI-Dashboard.png'
import PerWeb from '/Users/farhan/React-projects/farhan-portfolio/src/assets/portfolio/Personal-Website.png'
import AspMVC from '/Users/farhan/React-projects/farhan-portfolio/src/assets/portfolio/asp-mvc.jpeg'
import Youtube from '/Users/farhan/React-projects/farhan-portfolio/src/assets/portfolio/Youtube.jpeg'
const Projects = () => {
  return (
    <div name='projects' className=' bg-gradient-to-b from-black to-blue-800 w-full
     text-white md:h-screen'>  
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-800'>Projects</p>
            <p className='py-6'>Check out some of my works here</p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            
            <div className='shadow-md shadow-red-700 rounded-lg'>
                <img src={DashImage}
                 className=' rounded-md duration-200 hover:scale-110'  />
                <div className='flex items-center flex-col justify-center'>
                    <a target='blank' href='https://github.com/FarhanMubark/Admin-Dashboard' className='w-1/2 px-6 py-3 m-3 font-bold duration-200 text-xs md:text-[16px] text-center hover:scale-105 md:hover:text-blue-400'>Source Code</a>
                    <p className=' px-1 justify-center text-center py-1 m-1'>Full Stack - Admin Dashboard</p>
                </div>
            </div>

            <div className='shadow-md shadow-red-700 rounded-lg'>
                <img src={JWT}
                 className=' rounded-md duration-200 hover:scale-110'  />
                <div className='flex items-center flex-col justify-center'>
                    <a target='blank' href='https://github.com/FarhanMubark/ASP.NET-JWT-GeneratingTokens' className='w-1/2 px-6 py-3 m-3 font-bold duration-200 text-xs md:text-[16px] text-center hover:scale-105 md:hover:text-blue-400'>Source Code</a>
                    <p className=' px-1 justify-center text-center py-1 m-1'>Generating Access and Refresh Tokens</p>
                </div>
            </div>

            <div className='shadow-md shadow-red-700 rounded-lg'>
                <img src={Youtube}
                 className=' rounded-md duration-200 hover:scale-110'  />
                <div className='flex items-center flex-col justify-center'>
                    <a target='blank' href='https://www.youtube.com/@farhanmubarak4397' className='w-1/2 px-6 py-3 m-3 font-bold duration-200 hover:scale-105 text-xs md:text-[16px] text-center md:hover:text-blue-400'>Source Code</a>
                    <p className=' px-1 justify-center text-center py-1 m-1'>Educational Website - UOH Computation </p>
                </div>
            </div>

            <div className='shadow-md shadow-red-700 rounded-lg'>
                <img src={MUIDash}
                 className=' rounded-md duration-200 hover:scale-110'  />
                <div className='flex items-center flex-col justify-center'>
                    <a target='blank' href='https://github.com/FarhanMubark/Dashboard-usingAntDesgin-MUI' className='w-1/2 px-6 py-3 m-3 font-bold duration-200 text-xs md:text-[16px] text-center hover:scale-105 md:hover:text-blue-400 sm:text-xsm'>Source Code</a>
                    <p className=' px-1  text-center py-1 m-1 text-sm'> Building Dashboard by using React + MUI</p>
                </div>
            </div>

            <div className='shadow-md shadow-red-700 rounded-lg'>
                <img src={PerWeb}
                 className=' rounded-md duration-200 hover:scale-110'  />
                <div className='flex items-center justify-center'>
                    <a target='blank' href='https://www.youtube.com/@farhanmubarak4397' className='w-1/2 px-6 py-3 m-4 duration-200 font-bold text-xs hover:scale-105 md:hover:text-blue-400'>Source Code</a>
                    <a target='blank' href='http://farhanalanazi.com/' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-xs md:hover:text-blue-400'>Website</a>
               
                </div>
            </div>

            <div className='shadow-md shadow-red-700 rounded-lg'>
                <img src={AspMVC}
                 className=' rounded-md duration-200 hover:scale-110'  />
                <div className='flex items-center flex-col justify-center'>
                    <a target='blank' href='https://www.youtube.com/@farhanmubarak4397' className='w-1/2 px-6 py-3 m-3 font-bold duration-200 text-xs md:text-[16px] text-center hover:scale-105 md:hover:text-blue-400 '>Source Code</a>
                    <p className=' px-1  text-center py-1 m-1 text-sm'> Building Login System by using ASP.NET MVC</p>
                </div>
            </div>

          

        </div>
      </div>
    </div>
  )
}

export default Projects
