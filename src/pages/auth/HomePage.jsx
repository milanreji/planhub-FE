import React from "react";
import TextField from "../../components/TextField";
import { useForm } from "react-hook-form";
import { validation } from "./const";

function HomePage() {
  const { register } = useForm();
  return (
    <div className="flex flex-col items-center md:flex-row lg:flex-row md:h-screen">
      <div></div>
      <div className="md:flex-[749] lg:flex-[749] bg-[#fff] text-foreground">
        {/* <div>Login</div> */}
        <div className="flex flex-col justify-start gap-2">
          <TextField
            validation={validation.email}
            label="Email"
            name="email"
            type="email"
            register={register}
            placeholder="Enter your Email"
          />
          <TextField
            validation={validation.password}
            label="Password"
            name="password"
            type="password"
            register={register}
            placeholder="Enter your Password"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
