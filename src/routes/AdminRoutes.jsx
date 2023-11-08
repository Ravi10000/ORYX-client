import AuthLayout from "../layouts/Admin/AuthLayout";
import ForgotPassword from "../pages/Admin/Auth/ForgotPassword";
import LoginPage from "../pages/Admin/Auth/Login";

const EntryRoutes = [
    {
        path: "/admin",
        element: <AuthLayout />,
        children: [
            { path: "/admin/login", element: <LoginPage /> },
            { path: "/admin/reset/password", element: <ForgotPassword /> },
        ]
    }
];

export default EntryRoutes;
