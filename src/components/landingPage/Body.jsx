import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex flex-col">
        <div
          className="flex flex-col pt-40"
          style={{
            height: "700px",
            backgroundImage: `url('src/assets/wallpaper1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-[30px] font-thin pl-48 pb-10 pr-96">
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
