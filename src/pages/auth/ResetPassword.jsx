import React from "react";
import TextField from "../../components/TextField";
import { useForm } from "react-hook-form";
import { validation } from "./const";
import Button from "../../components/Button";
import Image from "../../components/Image";
import { apiRequest } from "../../services/apiWrapper";

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = async (data) => {
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get("token");
    data.token = token;
    if (data.password !== data.confirmation_password) {
      throw new Error("Passwords do not match");
    }
    try {
      const response = await apiRequest("/auth/reset_password", "POST", data);
      console.log("Rest password successful:", response);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="grid grid-cols-4 w-full h-full">
      <Image />
      <div className=" col-span-2 flex items-center justify-center">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="flex flex-col  gap-2">
            <div className="text-[2.5rem] font-mono self-center">
              Reset Password
            </div>

            <TextField
              validation={validation.password}
              label="Password"
              name="password"
              type="password"
              register={register}
              placeholder="Enter your New Password"
            />
            <TextField
              validation={validation.password}
              label="Confirm Password"
              name="confirmation_password"
              type="password"
              register={register}
              placeholder="Confirm your New Password"
            />
            <Button label="Reset Password" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
