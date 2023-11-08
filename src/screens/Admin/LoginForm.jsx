import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { EmailIcon, KeyIcon, EyeSlash } from "../../assets/svg";
import Button from "../../components/Button";
import { AiOutlineEye } from "react-icons/ai"

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action="" className="flex flex-col w-full gap-4">
      <Input.IconInput
        id="email--11"
        name="email"
        type="email"
        placeholder="Enter Email Address"
        icon={<EmailIcon />}
      />

      <Input.IconInput
        id="passwordd--11"
        name="email"
        placeholder="Password"
        icon={<KeyIcon />}
        type={showPassword ? "text" : "password"}
      >
        <span onClick={() => setShowPassword(prev => !prev)}>
          {showPassword ? <AiOutlineEye size={22} /> : <EyeSlash /> }
        </span>
      </Input.IconInput>

      <Link to={"/admin/auth/reset/password"} className="text-sm">
        Forgot Password?
      </Link>

      <Button className={"!m-0"}>Login</Button>
      <div className="font-semibold self-center">
        <span>Don&apos;t have an account? </span>
        <Link to={""} className="text-primary">
          Register Now
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
