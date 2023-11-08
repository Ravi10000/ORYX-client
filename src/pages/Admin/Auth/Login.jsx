import React from "react";
import AuthBanner from "../../../assets/images/auth-banner.png";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import Input from "../../../components/Input";
import { EmailIcon, KeyIcon, EyeSlash } from "../../../assets/svg";
import Button from "../../../components/Button";

const Login = () => {
  return (
    <>
      <section className="center pl-12">
        <div className="flex flex-col gap-10 min-w-full">
          <div className="logo center">
            <img src={Logo} alt="" />
          </div>
          <form action="" className="flex flex-col w-full gap-4">
            <h1 className="font-extrabold text-xl mb-2 self-center">
              Login to your account
            </h1>
            <Input.IconInput
              id="email--11"
              name="email"
              placeholder="Enter Email Address"
              icon={<EmailIcon />}
            />

            <Input.IconInput
              id="email--11"
              name="email"
              placeholder="Password"
              icon={<KeyIcon />}
            >
              <EyeSlash />
            </Input.IconInput>

            <Link to={""} className="text-sm">
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
        </div>
      </section>
      <section>
        <div className="image-wraper h-full overflow-hidden bg-gray-600 object-cover">
          {/* <img src={AuthBanner} alt="" className="object-contain" /> */}
        </div>
      </section>
    </>
  );
};

export default Login;
