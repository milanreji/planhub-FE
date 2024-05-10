import React from "react";
import { Link } from "react-router-dom";
import wallpaper from "../assets/wallpaper.jpg"

//https://wallpapers.com/images/hd/white-color-curved-lines-nposrbfoxgtt30hw.jpg
//https://png.pngtree.com/background/20210716/original/pngtree-white-abstract-vector-web-background-design-picture-image_1354906.jpg

const LandingPage = () => {
  return (
    <div className={`w-full h-full flex flex-col`}>
      <div className="grid grid-cols-4 gap-4 space-y-6 bg-white border-b-2 ">
        <div className="flex flex-row col-span-2">
          <img
            className="h-20 w-20"
            src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1715212800&semt=ais_user"
          />
          <div className="flex items-center text-2xl font-bold text-red-600">
            PlanHub
          </div>
        </div>
        <div className="col-span-2 flex justify-around">
          <button className="hover:bg-slate-200 text-red-600 rounded-lg w-24 h-8">
            Pricing
          </button>
          <button className="hover:bg-slate-200 text-red-600 rounded-lg w-24 h-8">
            Blog
          </button>
          <button className="hover:bg-slate-200 text-red-600 rounded-lg w-24 h-8">
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
      <div className="abc">
        <div className="flex flex-col pt-40 abc"
         style={{ 
          height: '700px',
          backgroundImage: `url('src/assets/wallpaper1.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        >
          <div className="text-[30px] font-thin pl-48 pb-10 pr-96">
            Effortlessly organize tasks, streamline workflows, and boost
            productivity with our intuitive Kanban board. Visualize your work in
            progress, collaborate seamlessly, and stay on top of deadlines—all in
            one place
          </div>
          <Link
            to={"/signup"}
            className="flex flex-col items-center justify-center self-center hover:bg-red-400 bg-red-600 rounded-3xl w-56 h-10 text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
