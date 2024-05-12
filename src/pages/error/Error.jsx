import React from "react";
import ErrorImage from "../../components/ErrorImage";
import { useRouteError } from "react-router-dom";
import  image  from "../../assets/SMW.png";

const Error = () => {
  const error = useRouteError();
  console.log(error, "error");
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="font-semibold md:text-[2.5rem]">PlanHub</div>
      {error.status === 404 ? (
        <>
          <ErrorImage />
          <div className="font-medium text-[1.5rem]">Sorry! </div>
          <div className="font-medium  md:text-[2.5rem]">
            We can't seem to find the resource you're looking for.
          </div>
          <div className="font-light text-[1rem]">
            Please check that the Web site address is spelled correctly. Or go
            to our{" "}
            <a href="/" className="underline text-blue-500 cursor-pointer">
              home page
            </a>
            , and use the menus to navigate to a specific section.
          </div>
        </>
      ) : (
        <>
          <img className="h-1/2" src={image} alt="" />
          <div className="font-extralight md:text-[3rem]">Something Went Wrong</div>
        </>
      )}
    </div>
  );
};

export default Error;
