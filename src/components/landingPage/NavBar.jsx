import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="grid grid-cols-4 gap-4 space-y-6 border-b border-red-500">
       <div className="flex flex-row col-span-2">
          <img
            className="h-20 w-20"
            src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1715212800&semt=ais_user"
          />
          <div className="flex items-center text-2xl font-bold text-black">
            PlanHub
          </div>
        </div>
        <div className="col-span-2 flex justify-around">
          <button className="hover:bg-slate-200 text-black rounded-lg w-24 h-8">
            Pricing
          </button>
          <button className="hover:bg-slate-200 text-black rounded-lg w-24 h-8">
            Blog
          </button>
          <button className="hover:bg-slate-200 text-black rounded-lg w-24 h-8">
            {" "}
            About
          </button>
          <Link
            to={"/signup"}
            className="flex flex-col items-center justify-center hover:bg-red-600 hover:text-white bg-white border border-red-600 text-red-600 rounded-lg w-32 h-8"
          >
            Get Started
          </Link>
          <Link
            to={"/login"}
            className="flex items-center justify-center hover:bg-yellow-300 bg-yellow-500 rounded-lg w-44 h-8"
          >
            Login
          </Link>
        </div>
    </div>
  )
}

export default NavBar
