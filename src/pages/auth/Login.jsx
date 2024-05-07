import React from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

const Login = () => {
  return (
    <form className="h-full flex flex-col items-center justify-center gap-10 ">
      <div className="flex flex-col justify-start gap-2">
        <TextField
          id="email"
          type="email"
          label="Email"
          labelclassName="text-xl"
          inputClassName="min-h-10 border-2 border-green-900 border-solid rounded-md text-italic indent-3.5	"
          placeholder="Enter your Email"
        />
      </div>
      <div className="flex flex-col justify-start gap-2">
        <TextField
          id="password"
          type="password"
          label="Password"
          labelclassName="text-xl"
          inputClassName="min-h-10	border-2 border-green-900 border-solid rounded-md	indent-3.5"
          placeholder="Enter your Password"
        />
      </div>
      <Button type="submit" buttonContent="Sign In" className=""></Button>
    </form>
  );
};

export default Login;
