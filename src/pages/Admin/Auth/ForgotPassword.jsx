import React from "react";
import TitleLogo from "../../../components/Admin/TitleLogo";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { ArrowLeft, EmailIcon } from "../../../assets/svg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <TitleLogo title={"forgot your password"}></TitleLogo>
      <form action="" className="flex flex-col gap-4">
        <Input.IconInput
          id="password--10"
          name="email"
          type="email"
          icon={<EmailIcon />}
          placeholder={"Enter Email Address"}
        />

        <Button className="">Reset Password</Button>

        <Link to={"/admin/auth/login"} className="flex gap-4 items-center w-max">
          <ArrowLeft></ArrowLeft>
          <span className="text-textColor">Back to Login</span>
        </Link>
      </form>
    </>
  );
};

export default ForgotPassword;
