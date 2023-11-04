import ForgotPassword from "../pages/ForgotPassword";
import LoginPage from "../pages/LoginPage";
import OtpPage from "../pages/OtpPage";

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
