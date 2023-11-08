import AuthLayout from "../layouts/Admin/AuthLayout";
import ForgotPassword from "../pages/Admin/Auth/ForgotPassword";
import LoginPage from "../pages/Admin/Auth/Login";
import UserManagement from "../pages/Admin/User/UserManagement";

const AuthRoutes = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "reset/password", element: <ForgotPassword /> },
    ],
  },
];

const UserRoutes = [
  {
    path: "user",
    children: [
      {
        path: "management",
        element: <UserManagement />,
      },
    ],
  },
];

const EntryRoutes = [
  {
    path: "/admin",
    children: [...AuthRoutes, ...UserRoutes],
  },
];

export default EntryRoutes;
