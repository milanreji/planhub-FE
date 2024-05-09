import React from "react";
import TextField from "../../components/TextField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { validation } from "./const";
import Button from "../../components/Button";
import Login from "./Login";

function ForgotPassword() {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <div
      className="h-full flex flex-col items-center justify-center gap-10"
      onSubmit={handleSubmit(handleRegistration)}
    >
      <form className="flex flex-col justify-start gap-2">
        <TextField
          validation={validation.email}
          label="Email"
          name="email"
          type="email"
          register={register}
          placeholder="Enter your Email"
        />

        <Button label="Submit" />
        <Link
          to={"/login"}
          className="text-blue-300 flex flex-col items-center justify-center"
        >
          Back to Login
        </Link>
      </form>
    </div>
  );
}

export default ForgotPassword;
