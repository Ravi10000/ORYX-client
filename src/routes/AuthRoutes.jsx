import MainLayout from "../layouts/MainLayout";
import Auctions from "../pages/Auctions";
import Dashboard from "../pages/Dashboard";
import Marketplace from "../pages/Marketplace";
import UpcomingPage from "../pages/UpcomingPage";


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
        path: "/auctions",
        element: <Auctions />,
      }
    ]
  },
];

export default AuthRoutes;
