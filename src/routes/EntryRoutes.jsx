import ForgotPassword from "../pages/Auth/ForgotPassword";
import LoginPage from "../pages/Auth/LoginPage";
import OtpPage from "../pages/Auth/OtpPage";

const EntryRoutes = [
  { path: "login", element: <LoginPage /> },
  {
    path: "resetPassword",
    element: <ForgotPassword />,
    children: [],
  },
  { path: "otp", element: <OtpPage /> }
];

export default EntryRoutes;
