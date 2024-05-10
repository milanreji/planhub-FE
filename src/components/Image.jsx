import React from "react";
import image from "../assets/image.png"

const Image = () => {
  return (
    <div className="col-span-2 flex items-center justify-center">
      <img
        className="h-[40rem]"
        src={image}
      />
    </div>
  );
};

export default Image;
