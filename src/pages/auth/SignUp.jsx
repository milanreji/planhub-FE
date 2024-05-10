import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../components/TextField";
import { validation } from "./const";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Image from "../../components/Image";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <div className="grid grid-cols-4 w-full h-full">
      <Image />
      <div className="col-span-2 flex items-center justify-center">
        <form
          className="h-full flex flex-col items-center justify-center gap-10"
          onSubmit={handleSubmit(handleRegistration)}
        >
          <div className="flex flex-col justify-start gap-2">
            <TextField
              validation={validation.username}
              label="Username"
              name="name"
              type="text"
              register={register}
              placeholder="Enter your Username"
            />
            <TextField
              validation={validation.name}
              label="Fullname"
              name="name"
              type="text"
              register={register}
              placeholder="Enter your FullName"
            />
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
            <Button label={"SignUp"} />
            {/* <div className="text-blue-300 flex flex-col items-center justify-center"> */}
            <div className="flex flex-row items-center justify-center">
              Already have an account?
              <Link className="font-bold text-blue-300 ml-1" to={"/login"}>
                Login
              </Link>
            </div>
            {/* </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
