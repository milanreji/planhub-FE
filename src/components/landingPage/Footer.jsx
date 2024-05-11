import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-300 flex flex-col justify-center items-center">
      <div className="font-light text-[2rem] pt-5">PlanHub</div>
      <div className="flex flex-row pt-6 pb-2 justify-around w-full">
        <div className="flex flex-row gap-5">
          <a className="font-extralight cursor-pointer hover:text-blue-500">
            Privacy Policy
          </a>
          <a className="font-extralight cursor-pointer hover:text-blue-500">
            Terms of Use
          </a>
        </div>
        <div className="font-extralight">© 2024 - 2025 PlanHub.com, Inc</div>
      </div>
    </div>
  );
};

export default Footer;
