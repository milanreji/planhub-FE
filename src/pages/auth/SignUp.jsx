import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../components/TextField";
import { validation } from "./const";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <TextField
        validation={validation.username}
        label="Username"
        name="name"
        type="text"
        register={register}
      />
      <TextField
        validation={validation.name}
        label="Fullname"
        name="name"
        type="text"
        register={register}
      />

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
    </form>
  );
};

export default SignUp;
