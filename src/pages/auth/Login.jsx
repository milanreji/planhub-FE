import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../components/TextField";
import { validation } from "./const";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);
  return (
    <form
      className="h-full flex flex-col items-center justify-center gap-10 "
      onSubmit={handleSubmit(handleRegistration)}
    >
      <div className="flex flex-col justify-start gap-2">
        <TextField
          validation={validation.email}
          label="Email"
          name="email"
          type="email"
          register={register}
        />
        <TextField
          validation={validation.password}
          label="Password"
          name="password"
          type="password"
          register={register}
        />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Login;
