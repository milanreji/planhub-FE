import React from "react";
import TextField from "../../components/TextField";
import { useForm } from "react-hook-form";
import { validation } from "./const";
import Button from "../../components/Button";
import Image from "../../components/Image";

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);

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
              label="Password"
              name="password"
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
