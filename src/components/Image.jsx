import React from "react";
import image from "../assets/image.png"

const Image = () => {
  return (
    <div className="col-span-2 flex items-center justify-center font-bold bg-slate-200">
      {/* <img
        className="h-[40rem]"
        src={image}
      /> */}
      <div className="text-[5rem] text-slate-600">PlanHub</div>
    </div>
  );
};

export default Image;
