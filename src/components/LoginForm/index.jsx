import React, { useState }  from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import TextInput, { Checkbox } from "../Input";
import { Link } from "react-router-dom";

import Button from "../Button";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="space-y-4">
      <div>
        <TextInput
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Email"
        ></TextInput>
      </div>
      <div className="relative">
        <TextInput
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="password"
        ></TextInput>
        <button
          type="button"
          className="absolute top-1/2 right-2 transform -translate-y-1/2"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-y-5">
        <Checkbox
          labelText={"Remember me"}
          id="remember__me"
          name="isRemember"
          className="mr-2"
        ></Checkbox>
        <Link to={'/resetPassword'} className="text-sm text-indigo-600 hover:underline">
          Forgot password?
        </Link>
      </div>
      <div>
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
