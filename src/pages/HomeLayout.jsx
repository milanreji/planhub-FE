import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center ">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
