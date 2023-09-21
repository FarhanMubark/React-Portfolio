import React from 'react'
import {FaGithub, FaLinkedin, FaYoutube} from 'react-icons/fa'
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (

    <footer className=' bg-gray-900 text-white py-4 md:hidden '>
        <div className='justify-center mx-auto w-auto h-auto flex'>
            <a className='pr-6 ' target='blank' href='https://www.linkedin.com/in/farhan-alanazi'><FaLinkedin size={27} className='hover:text-blue-800 duration-300 hover:scale-110'/></a>
            <a className='pr-6' target='blank' href='https://github.com/FarhanMubark'><FaGithub size={27} className='hover:text-gray-700 duration-300 hover:scale-110'/></a>
            <a className='pr-6' target='blank' href='https://www.youtube.com/@farhanmubarak4397'><FaYoutube size={27} className='hover:text-red-700 duration-300 hover:scale-110'/></a>
            <a href='/Farhan-Resume.pdf' download={true} className=''> <BsFillPersonLinesFill size={27} className='hover:text-yellow-400 duration-300'/></a>
        </div>
        <div className='justify-center flex pt-3'>
            &copy; 2023 Created by Farhan Alanazi
        </div>
    </footer>
  )
}

export default Footer
