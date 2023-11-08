import { useRoutes } from "react-router";
import EntryRoutes from "./EntryRoutes";
import AuthRoutes from "./AuthRoutes";

import AdminRoutes from "./AdminRoutes";

const Routes = () => {
  const routes = useRoutes([...AuthRoutes, ...EntryRoutes, ...AdminRoutes]);
  return routes;
};

export default Routes;
