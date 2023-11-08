import AuthLayout from "../layouts/Admin/AuthLayout";
import LoginPage from "../pages/Admin/Auth/Login";

const EntryRoutes = [
    {
        path: "/admin",
        element: <AuthLayout />,
        children: [
            { path: "/admin/login", element: <LoginPage /> },
        ]
    }
];

export default EntryRoutes;
