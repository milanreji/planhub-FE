import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex flex-col">
        <div
          className="flex flex-col pt-40 h-[700px] bg-cover bg-center bg-no-repeat bg-wallpaper"
        >
          <div className="md:text-[30px] font-thin md:pl-48 md:pb-10 md:pr-96">
            Effortlessly organize tasks, streamline workflows, and boost
            productivity with our intuitive Kanban board. Visualize your work in
            progress, collaborate seamlessly, and stay on top of deadlines—all
            in one place
          </div>
          <Link
            to={"/signup"}
            className="flex flex-col items-center justify-center self-center hover:bg-red-700 bg-red-600 rounded-3xl w-56 h-10 text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
  )
}

export default Body
