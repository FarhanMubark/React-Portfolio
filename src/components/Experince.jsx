import React from 'react'
import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import TypeScript from "../assets/TypeScript.png";
import CSharp from "../assets/CSharp.png"
import Docker from "../assets/docker.png"
import Java from "../assets/java.png"
import Spring from "../assets/spring.png"
import Postman from "../assets/postman.png"
import Vitejs from "../assets/vitejs.png"

const Experince = () => {
  const techs = [
    {
      id:1,
      src: Html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id:2,
      src: Docker,
      title: 'Docker',
      style: 'shadow-blue-500'
    },
    {
      id:3,
      src: Javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id:4,
      src: ReactImage,
      title: 'React',
      style: 'shadow-blue-500'
    },
    {
      id:5,
      src: Tailwind,
      title: 'Tailwindcss',
      style: 'shadow-sky-500'
    },
    {
      id:6,
      src: TypeScript,
      title: 'TypeScript',
      style: 'shadow-blue-500'
    },
    {
      id:7,
      src: Github,
      title: 'Github',
      style: 'shadow-gray-500'
    },
    {
      id:8,
      src: CSharp,
      title: 'C#',
      style: 'shadow-pink-500'
    },
    {
      id:9,
      src: Java,
      title: 'Java',
      style: 'shadow-orange-500'
    },
     {
      id:10,
      src: Spring,
      title: 'Spring',
      style: 'shadow-green-700'
    },
    {
      id:11,
      src: Postman,
      title: 'Postman',
      style: 'shadow-orange-600'
    },
    {
      id:12,
      src: Vitejs,
      title: 'ViteJS',
      style: 'shadow-violet-500'
    }
  ]
  return (
    <div name="experience" className=' bg-gradient-to-b from-blue-800 to-black w-full h-screen'>
      <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='pt-[180px] md:pt-[200px]'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-7 text-center py-8 sm:px-0'>
          {techs.map(({id, src, title, style}) =>(
              <div key={id} className={`shadow-sm hover:scale-105 duration-500
              py-2 rounded-lg ${style}`}>
               <img src={src}  className='w-20 mx-auto' />
               <p className='mt-4'>{title}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experince
