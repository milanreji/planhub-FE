import React from "react";
import square from "../../assets/square.png";
import TextField from "../../components/TextField";
import { useForm } from "react-hook-form";
import { validation } from "../../pages/auth/const";
import Button from "../../components/Button";

function SquarePart() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-700">
      <div className="w-4/5 h-4/5 bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center mb-10">
          <div className="text-2xl ml-5 font-bold">PlanHub</div>
          <div className="flex flex-row gap-12">
            <h1 className="text-lg cursor-pointer hover:text-blue-500 no-underline">
              Contact
            </h1>
            <h1 className="text-lg cursor-pointer hover:text-blue-500 no-underline">
              Features
            </h1>
            <h1 className="text-lg cursor-pointer hover:text-blue-500 no-underline">
              About
            </h1>

            <h1 className="text-lg cursor-pointer hover:text-blue-500 no-underline">
              Signup
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-4 max-w-lg">
            <h1 className="text-5xl font-bold">
              An online task management for teams
            </h1>
            <div className="text-lg">
              Quick task completion wherever you are and manage your teams with
              simple boards.
            </div>
            <form
              onSubmit={handleSubmit(handleRegistration)}
              className="mt-4 flex gap-2"
            >
              <TextField
                validation={validation.email}
                // label="Email"
                name="email"
                type="email"
                register={register}
                placeholder="Enter your Email"
                error={errors.email}
                inputclassName="w-10 rounded-md"
              />
              <Button label="Sign In" />
            </form>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src={square} alt="Square" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SquarePart;
