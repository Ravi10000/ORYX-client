import React, { useState } from "react";
import { api } from "../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function ResetPasswordPage() {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState();

  const navigate = useNavigate();

  async function forgotPassword() {
    try {
      const res = await api.post('/auth/forgot-password', { email });
      // console.log(res);
      setUserId(res?.data?.user._id);
      if (res?.data.success) {
        toast.success('OTP sent Successfully');
        setIsOtpSent(true);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error)
    }
  }

  // console.log(userId);

  async function verifyOtp() {
    try {
      const res = await api.post('/auth/verify-otp', { email, otp });
      // console.log(res);
      if (res?.data.success) {
        toast.success('OTP Verified Successfully');
      }
      setIsVerified(true);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error)
    }
  }

  async function resetPassword() {
    try {
      // console.log(password);
      const res = await api.put(`/auth/reset-password/${userId}`,
        { password: password }
      );
      // console.log(res);
      if (res?.data.success) {
        toast.success('Password Reset Successfully');
      }
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-login-pattern relative bg-no-repeat bg-cover before:w-full before:bg-black before:absolute before:h-full before:opacity-80">
      <div className="max-w-md w-full p-10 space-y-6 bg-white rounded-lg z-50">

        <form
          className="space-y-4">
          {!isVerified &&
            <div>
              {isOtpSent ? (
                <div>
                  <h2 className="text-2xl font-semibold text-center text-primary mb-5">
                    Verify OTP
                  </h2>
                  <input
                    type="number"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded-sm focus:ring-1 ring-inset focus:ring-blue-300 outline-none placeholder:capitalize'
                  />

                  <button
                    type="button"
                    onClick={verifyOtp}
                    className='w-full p-2 py-3 mt-8 bg- text-white rounded-lg bg-primary hover:bg-hover'
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-semibold text-center text-primary mb-5">
                    Forgot Password
                  </h2>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded-sm focus:ring-1 ring-inset focus:ring-blue-300 outline-none placeholder:capitalize'
                    placeholder="Email"
                  />

                  <button
                    type="button"
                    onClick={forgotPassword}
                    className='w-full p-2 py-3 mt-8 bg- text-white rounded-lg bg-primary hover:bg-hover'
                  >
                    Send OTP
                  </button>
                </div>
              )
              }
            </div>
          }

          {isVerified && (
            <div>
              <h2 className="text-2xl font-semibold text-center text-primary mb-5">
                Reset Password
              </h2>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-sm focus:ring-1 ring-inset focus:ring-blue-300 outline-none placeholder:capitalize'
                placeholder="Password"
              />

              <button
                type="button"
                onClick={resetPassword}
                className='w-full p-2 py-3 mt-8 bg- text-white rounded-lg bg-primary hover:bg-hover'
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}