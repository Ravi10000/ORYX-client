import LoginPage from "../pages/Auth/LoginPage";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/forgotPassword";

const EntryRoutes = [
  { path: "register", element: <Register /> },
  { path: "login", element: <LoginPage /> },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
    children: [],
  },
];

export default EntryRoutes;