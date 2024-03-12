import Register from "../pages/Auth/register";
import Login from "../pages/Auth/login";
import ForgotPassword from "../pages/Auth/forgotPassword";
import Marketplace from "../pages/marketplace";

const EntryRoutes = [
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
    children: [],
  },
];

export default EntryRoutes;
