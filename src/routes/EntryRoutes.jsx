import Register from "../pages/Auth/register";
import Login from "../pages/Auth/login";
import ForgotPassword from "../pages/Auth/forgotPassword";

const EntryRoutes = [
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
    children: [],
  },
];

export default EntryRoutes;