import React from 'react'

const About = () => {
  
  return (
    <div name='about'
     className='w-full h-screen bg-gradient-to-b from-blue-800 to-black text-white' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-12'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-1 '>As a 23-year-old graduate of the University of Hail with a degree in Software Engineering, I have gained extensive experience working on various projects that have allowed me to develop a wide range of skills in full stack development.</p>
        <br/>
        <p className='text-xl'>I have gained experience in front-end development using modern frameworks such as React, as well as back-end development using technologies such as Spring Boot, ASP.NET and MSSQL and MySQL for The Database. These experiences have equipped me with a strong understanding of software development principles and methodologies, as well as the importance of collaboration, effective communication, and project management skills.</p>
      </div>
    </div>
  )
}

export default About
