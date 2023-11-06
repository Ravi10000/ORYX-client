import MainLayout from "../layouts/MainLayout";
import Favorites from "../pages/Favorites";
import Dashboard from "../pages/Dashboard";
import Marketplace from "../pages/Marketplace";
import UpcomingPage from "../pages/UpcomingPage";
import Overview from "../pages/Overview";
import MyProperties from "../pages/MyProperties";


const AuthRoutes = [
  {
    // path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/upcoming-pages",
        element: <UpcomingPage />,
      },
      {
        path: "/favorties",
        element: <Favorites />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/my-properties",
        element: <MyProperties />,
      },
    ]
  },
];

export default AuthRoutes;
