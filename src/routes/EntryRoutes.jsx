import LoginPage from "../pages/Auth/LoginPage";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";

const EntryRoutes = [
  { path: "register", element: <Register /> },
  { path: "login", element: <LoginPage /> },
  {
    path: "reset-password",
    element: <ResetPassword />,
    children: [],
  },
];

export default EntryRoutes;