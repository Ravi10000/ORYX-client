import ForgotPassword from "../pages/Auth/ForgotPassword";
import LoginPage from "../pages/Auth/LoginPage";
import OtpPage from "../pages/Auth/OtpPage";
import Register from "../pages/Auth/Register";

const EntryRoutes = [
  { path: "register", element: <Register /> },
  { path: "login", element: <LoginPage /> },
  {
    path: "reset-password",
    element: <ForgotPassword />,
    children: [],
  },
  { path: "otp", element: <OtpPage /> }
];

export default EntryRoutes;
