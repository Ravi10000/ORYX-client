import React from "react";

import MainLayout from "../layouts/MainLayout";
import Loader from "../components/Loader";

const Settings = React.lazy(() => import(`../pages/Settings`));
const Payouts = React.lazy(() => import(`../pages/Payouts`));
const MyProperties = React.lazy(() => import(`../pages/myProperties`));
const PropertyDetail = React.lazy(() =>
  import(`../pages/myProperties/PropertyDetail`)
);
const AddProperty = React.lazy(() =>
  import(`../pages/myProperties/addProperty`)
);
const Overview = React.lazy(() => import(`../pages/Overview`));
const UpcomingPage = React.lazy(() => import(`../pages/UpcomingPage`));
// const Marketplace = React.lazy(() => import(`../pages/marketplace`));
const AddProject = React.lazy(() => import(`../pages/marketplace/addProject`));
const ViewProperties = React.lazy(() =>
  import(`../pages/marketplace/viewProperties`)
);
const AddProjectProperty = React.lazy(() =>
  import(`../pages/marketplace/viewProperties/addProperty`)
);
const Dashboard = React.lazy(() => import(`../pages/Dashboard`));
const Favorites = React.lazy(() => import(`../pages/Favorites`));

const _AuthRoutes = [
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      // {
      //   path: "/marketplace",
      //   element: <Marketplace />,
      // },
      {
        path: "/marketplace/add-project",
        element: <AddProject />,
      },
      {
        path: "/marketplace/view-properties",
        element: <ViewProperties />,
      },
      {
        path: "/marketplace/view-properties/add-property",
        element: <AddProjectProperty />,
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
        path: "/my-properties/add-property",
        element: <AddProperty />,
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
        path: "/property-detail/:id",
        element: <PropertyDetail />,
      },
    ],
  },
];

const AuthRoutes = _AuthRoutes.map((item) => ({
  ...item,
  children: item.children.map((child) => ({
    ...child,
    element: (
      <React.Suspense fallback={<Loader />}>{child.element}</React.Suspense>
    ),
  })),
}));

export default AuthRoutes;
