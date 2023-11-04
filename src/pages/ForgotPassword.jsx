import React from "react";
import TextInput from "../components/Input";
import Error from "../components/Error";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-login-pattern relative bg-no-repeat bg-cover before:w-full before:bg-black before:absolute before:h-full before:opacity-80">
      <div className="logo"></div>
      <div className="max-w-md w-full p-10 space-y-6 bg-white rounded-lg z-50">
        <h2 className="text-2xl font-semibold text-center text-primary">
          Forgot Password
        </h2>

        <Error></Error>

        <form action="" className="space-y-4">
          <div>
            <TextInput
              type={"email"}
              name="email"
              placeholder="Email"
            ></TextInput>
          </div>

          <Link to={'/otp'}>
            <Button type={"submit"}>Continue</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
