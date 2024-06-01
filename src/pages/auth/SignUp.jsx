import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../components/TextField";
import { validation } from "./const";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Image from "../../components/Image";
import { apiRequest } from "../../services/apiWrapper";
import { validateEmail, validatePassword } from "../utils/validations";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = async (data) => {
    try {
      const emailValidation = validateEmail(data.email);
      if (!emailValidation) {
        throw new Error("Invalid Email format");
      }
      const passwordValidation = validatePassword(data.password);
      if (!passwordValidation) {
        throw new Error("Invalid password format");
      }
      const response = await apiRequest("/auth/signup", "POST", data);
      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="grid grid-cols-4 w-full h-full">
      <Image />
      <div className="md:col-span-2 md:row-span-2 col-span-4 flex items-center justify-center">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="flex flex-col gap-2">
            <div className="text-[2.5rem] font-mono self-center">SignUp</div>

            <TextField
              validation={validation.fullName}
              errorMessage={errors?.fullName && errors.fullName.message}
              error={errors.fullName}
              label="Firstname"
              name="firstname"
              type="text"
              register={register}
              placeholder="Enter your FullName"
            />
            <TextField
              validation={validation.lastName}
              errorMessage={errors?.lastName && errors.lastName.message}
              error={errors.lastName}
              label="Lastname"
              name="lastname"
              type="text"
              register={register}
              placeholder="Enter your Lastname"
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
              validation={{
                ...validation.password,
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              }}
              errorMessage={errors?.password && errors.password.message}
              error={errors.password}
              label="Password"
              name="password"
              type="password"
              register={register}
              placeholder="Enter your Password"
            />
            <TextField
              validation={{
                ...validation.password,
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              }}
              errorMessage={errors?.password && errors.password.message}
              error={errors.password}
              label="Confirm Password"
              name="confirmation_password"
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
