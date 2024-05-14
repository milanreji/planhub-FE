import React from "react";
import image from "../assets/image.png";

const Image = () => {
  return (
    <div className="hidden md:col-span-2 md:row-span-2 md:flex items-center justify-center font-bold bg-slate-200 col-span-4 row-span-1">
      {/* <img
        className="h-[40rem]"
        src={image}
      /> */}
      <div className="text-[5rem] text-slate-600">PlanHub</div>
    </div>
  );
};

export default Image;
