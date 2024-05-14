import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../components/TextField";
import { validation } from "./const";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Image from "../../components/Image";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <div className="grid grid-cols-4 grid-rows-2 w-full h-full  ">
      <Image />
      <div className="md:col-span-2 md:row-span-2 col-span-4 row-span-1 flex items-center justify-center">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="flex flex-col gap-2">
            <div className="text-[2.5rem] font-mono self-center">Login</div>
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
            <Link
              className="self-end text-blue-600 hover:underline font-mono"
              to={"/forgot-password"}
            >
              Forgot Password{" "}
            </Link>
            <Button label="Login" />
            <div className="flex flex-row items-center justify-center ">
              <span> Don't have an account?</span>
              <Link
                className="font-mono text-blue-600 ml-1 hover:underline"
                to={"/signup"}
              >
                SignUp
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
