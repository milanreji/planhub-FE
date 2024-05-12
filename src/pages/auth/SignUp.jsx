import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../components/TextField";
import { validation } from "./const";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Image from "../../components/Image";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <div className="grid grid-cols-4 w-full h-full">
      <Image />
      <div className="col-span-2 flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="flex flex-col justify-start gap-2">
            <div className="text-[2.5rem] font-mono self-center">SignUp</div>
            <TextField
              validation={validation.userName}
              errorMessage={errors?.userName && errors.userName.message}
              error={errors.userName}
              label="Username"
              name="userName"
              type="text"
              register={register}
              placeholder="Enter your Username"
            />
            <TextField
              validation={validation.fullName}
              errorMessage={errors?.fullName && errors.fullName.message}
              error={errors.fullName}
              label="Fullname"
              name="fullName"
              type="text"
              register={register}
              placeholder="Enter your FullName"
            />
            <TextField
              validation={validation.email}
              errorMessage={errors?.email && errors.email.message}
              error={errors.email}
              label="Email"
              name="email"
              type="email"
              register={register}
              placeholder="Enter your Email"
            />
            <TextField
              validation={validation.password}
              errorMessage={errors?.password && errors.password.message}
              error={errors.password}
              label="Password"
              name="password"
              type="password"
              register={register}
              placeholder="Enter your Password"
            />
            <div></div>
            <Button label={"Sign Up"} />
            <div className="flex flex-row items-center justify-center pt-3">
              Already have an account?
              <Link
                className=" text-blue-600 ml-1 hover:underline font-mono"
                to={"/login"}
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
