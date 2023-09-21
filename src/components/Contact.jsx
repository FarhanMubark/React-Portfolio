
import React from 'react'

const Contact = () => {
  return (
    <div
    name="contact"
    className="w-full h-screen bg-gradient-to-b from-black to-blue-800 p-4  text-white"
  >
    <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <div className="pb-11 flex justify-center items-center">
        <p className="text-4xl font-bold mt-[50px] border-gray-500">
          Contact Me
        </p>
      
      </div>

      <div className=" flex justify-center items-center">
        <form
          action="https://getform.io/f/816217af-7d27-4421-8043-f379bd097ae1"
          method="POST"
          className=" flex flex-col w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>

          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact
