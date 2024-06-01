import React from "react";
import TextField from "../../components/TextField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { validation } from "./const";
import Button from "../../components/Button";
import Image from "../../components/Image";
import leftArrow from "../../assets/leftArrow.svg";
import { apiRequest } from "../../services/apiWrapper";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = async (data) => {
    try {
      const response = await apiRequest("/auth/forgot_password", "POST", data);
      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <div className="grid grid-cols-4 w-full h-full">
      <Image />
      <div className="col-span-2 flex items-center justify-center">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="flex flex-col  gap-2">
            <div className="text-[2.5rem] font-mono self-center">
              Forgot Password
            </div>

            <TextField
              validation={validation.password}
              label="Email"
              name="email"
              type="email"
              register={register}
              placeholder="Enter your Email"
            />

            <Button label="Submit" />
            <Link
              className="flex mt-1 self-center text-blue-600 hover:underline font-mono text-center"
              to={"/login"}
            >
              <img src={leftArrow} alt="" width="10px" className="mr-1" />
              <span>Back To Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
