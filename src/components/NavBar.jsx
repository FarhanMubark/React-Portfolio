import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';
const NavBar = () => {
    const [nav ,setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "projects"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "contact"
        }
    ]
  return (
    <div className='flex justify-between items-center w-full h-20
      bg-gray-900 px-4  text-white fixed'> 
     
    
    <div>
        <h1 className='text-5xl font-signature ml-2'>Farhan</h1>
    </div>
    <ul className='hidden md:flex'>
        {links.map(({id, link})=> (
             <li key={id} className='px-4 cursor-pointer font-bold capitalize hover:scale-110 duration-200 
             text-white-500'> 
                <Link to={link} smooth duration={400} >{link}</Link>
             </li>
        ))}
    </ul>
    <div  onClick={()=> setNav(! nav)} className='cursor-pointer hover:text-gray-500 pr-4 z-10 md:hidden'>
       {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
    </div>
    {nav && (
    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
    bg-black bg-opacity-80 text-white'>
            {links.map(({id, link})=> (
             <li key={id} className='px-4 cursor-pointer capitalize  py-6 text-4xl'> 
                <Link onClick={()=>{setNav(!nav)}} to={link} smooth duration={400} >{link}</Link>
             </li>
        ))}
    </ul>
    )}
    </div>
  )
}

export default NavBar
