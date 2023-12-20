import AuthLayout from "../layouts/Admin/AuthLayout";
import MainLayout from "../layouts/Admin/MainLayout";

import ForgotPassword from "../pages/Admin/Auth/ForgotPassword";
import LoginPage from "../pages/Admin/Auth/Login";
import UserManagement from "../pages/Admin/User/UserManagement";
import RoleManagement from "../pages/Admin/User/RoleManagement";

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
    element: <MainLayout />,
    children: [
      {
        path: "management",
        element: <UserManagement />,
      },
      {
        path: "role",
        element: <RoleManagement />,
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
