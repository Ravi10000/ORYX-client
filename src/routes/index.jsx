import { useRoutes } from "react-router";
import EntryRoutes from "./EntryRoutes";
import AuthRoutes from "./AuthRoutes";

const Routes = () => {
  const routes = useRoutes([...AuthRoutes, ...EntryRoutes]);
  return routes;
};

export default Routes;
