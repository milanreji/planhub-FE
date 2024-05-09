import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-4 gap-4 space-y-10">
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
          <button className="bg-red-600 text-white rounded-lg w-24 h-8">
            Pricing
          </button>
          <button className="bg-red-600 text-white  rounded-lg w-24 h-8">
            Blog
          </button>
          <button className="bg-red-600 text-white rounded-lg w-24 h-8">
            {" "}
            About
          </button>
          <Link
            to={"/signup"}
            className="flex flex-col items-center justify-center bg-white border border-red-600 text-red-600 rounded-lg w-32 h-8"
          >
            Get Started
          </Link>
          <Link
            to={"/login"}
            className="flex items-center justify-center bg-yellow-500 rounded-lg w-44 h-8"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="flex flex-row pt-20">
        <div className="flex flex-col items-center justify-center">
          <img
            className=""
            src="https://img.freepik.com/free-vector/hand-drawn-business-planning-with-task-list_23-2149164275.jpg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[45px] font-thin">
            We collaborate with brands and agencies to create memorable
            experiences.
          </div>
          <Link
            to={"/signup"}
            className="flex flex-col items-center justify-center bg-red-600 rounded-xl w-56 h-10 text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
