import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import _ from "prop-types";

import {
  // Button,
  Dialog,
  DialogHeader,
  DialogBody,
  // DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { api } from "#/api";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import userStore from "#/stores/user.store";

SigninWindow.propTypes = {
  isOpen: _.bool.isRequired,
  handleOpen: _.func.isRequired,
};
function SigninWindow({ isOpen, handleOpen }) {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = userStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const navigate = useNavigate();

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  async function login(data) {
    try {
      const res = await api.post("/auth/login-user", data);
      setUser(res.data.user);
      const accessToken = res.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      toast.success("Login Successfull");
      handleOpen();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
    }
  }

  return (
    <Dialog open={isOpen} handler={handleOpen} size="xs">
      <DialogHeader>
        <span className="text-center w-full text-blue-500">
          Sign-in/Register
        </span>
      </DialogHeader>
      <DialogBody>
        <form onSubmit={handleSubmit(login)} className="space-y-4">
          <div>
            <input
              {...register("email", { required: "Email is Required." })}
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 ring-inset focus:ring-blue-300 outline-none placeholder:capitalize"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 font-medium">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 ring-inset focus:ring-blue-300 outline-none placeholder:capitalize"
              name="password"
              placeholder="password"
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex justify-between items-center text-sm">
            <Link to={"/forgot-password"} className="text-indigo-600">
              Forgot Password?
            </Link>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-y-5 text-sm">
            <span>Don&apos;t have an account? </span>
            <Link to={"/register"} className="text-indigo-600 hover:underline">
              Register
            </Link>
          </div>

          <div>
            <button
              className="w-full p-2 py-3 my-4 bg- text-white rounded-lg bg-primary hover:bg-hover"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center">OR</p>
        <div className="mb-3 px-3 w-full">
          <ConnectWallet
            theme="light"
            style={{ width: "100%" }}
            onConnect={() => {
              console.log("connected");
            }}
          />
        </div>
      </DialogBody>
      {/* <Button onClick={handleOpen}>close</Button> */}
    </Dialog>
  );
}

export default SigninWindow;
