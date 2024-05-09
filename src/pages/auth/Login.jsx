import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../components/TextField";
import { validation } from "./const";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
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
        <Link
          className="flex flex-col items-end text-sm font-bold text-blue-500"
          to={"/forgot-password"}
        >
          Forgot Password{" "}
        </Link>
        <Button label="Login" />
        <div className="flex flex-row items-center justify-center">
          Don't have an account?
          <Link className="font-bold text-blue-500 ml-1" to={"/signup"}>
            SignUp
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
