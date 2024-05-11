import React from "react";
import image from "../assets/image.png"

const Image = () => {
  return (
    <div className="col-span-2 flex items-center justify-center bg-red-500 font-bold">
      {/* <img
        className="h-[40rem]"
        src={image}
      /> */}
      <div className="text-[5rem] text-white">PlanHub</div>
    </div>
  );
};

export default Image;
