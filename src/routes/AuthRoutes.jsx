import React from "react"

import MainLayout from "../layouts/MainLayout";
import Loader from "../components/Loader";
import PropertyDetail from "../pages/PropertyDetail";

const LazyLoad = (path) => React.lazy(() =>  import(path)) 

const Settings        = LazyLoad("../pages/Settings")
const Payouts         = LazyLoad("../pages/Payouts")
const MyProperties    = LazyLoad("../pages/MyProperties")
const Overview        = LazyLoad("../pages/Overview")
const UpcomingPage    = LazyLoad("../pages/UpcomingPage")
const Marketplace     = LazyLoad("../pages/Marketplace")
const Dashboard       = LazyLoad("../pages/Dashboard")
const Favorites       = LazyLoad("../pages/Favorites")


const AuthRoutes = [
  {
    path: "/",
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
      {
        path: "/payouts",
        element: <Payouts />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/detail/:id",
        element: <PropertyDetail />
      }
    ]
  },
];

export default AuthRoutes.map(item => ({
  ...item,
  children: item.children.map( child => ({
    ...child,
    element: <React.Suspense fallback={<Loader />}>{child.element}</React.Suspense>
  }))
}));
