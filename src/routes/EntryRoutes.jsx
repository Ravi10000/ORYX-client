import LoginPage from "../pages/Auth/LoginPage";
import Register from "../pages/Auth/Register";
import ResetPasswordPage from "../pages/Auth/ResetPasswordPage";

const EntryRoutes = [
  { path: "register", element: <Register /> },
  { path: "login", element: <LoginPage /> },
  {
    path: "reset-password",
    element: <ResetPasswordPage />,
    children: [],
  },
];

export default EntryRoutes;