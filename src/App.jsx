import "./App.css";
import { Suspense } from "react";
import Loader from "./components/Loader";
import useFonts from "./hooks/useFonts";
// import Routes from "./routes";
import { useAddress } from "@thirdweb-dev/react";
import useFetchUser from "#/hooks/fetch-user";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/login";
import Marketplace from "./pages/marketplace";
import ForgotPassword from "./pages/Auth/forgotPassword";
import Dashboard from "./pages/Dashboard";
import AddProject from "./pages/marketplace/addProject";
import ViewProperties from "./pages/marketplace/viewProperties";
import UpcomingPage from "./pages/UpcomingPage";
import Favorites from "./pages/Favorites";
import Overview from "./pages/Overview";
import MyProperties from "./pages/myProperties";
import AddProperty from "./pages/myProperties/addProperty";
import Payouts from "./pages/Payouts";
import Settings from "./pages/Settings";
import PropertyDetail from "./pages/myProperties/PropertyDetail";
import AddProjectProperty from "./pages/marketplace/viewProperties/addProperty";
import MainLayout from "./layouts/MainLayout";
// import userStore from "./stores/user.store";
// import useWalletAddress from "./hooks/use-wallet-address";

function App() {
  // const address = useAddress();
  // console.log({ address });
  useFetchUser();
  // useWalletAddress();
  // console.group("ADDRESS");
  // console.trace({ address });
  // console.log({ address });
  // console.groupEnd("ADDRESS");

  // console.log({ address });
  // const [isFontsLoaded]   = useFonts(["Noto Sans"]);
  // const _Routes = Routes();
  const [isFontsLoaded] = useFonts(["Poppins"]);

  if (!isFontsLoaded) return <Loader />;

  // return <>{_Routes}</>;
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/add-project" element={<AddProject />} />
          <Route
            path="/marketplace/view-properties"
            element={<ViewProperties />}
          />
          <Route
            path="/marketplace/view-properties/add-property"
            element={<AddProjectProperty />}
          />

          <Route path="/upcoming-pages" element={<UpcomingPage />} />
          <Route path="/favorties" element={<Favorites />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/my-properties" element={<MyProperties />} />
          <Route path="/my-properties/add-property" element={<AddProperty />} />
          <Route path="/payouts" element={<Payouts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/property-detail/:id" element={<PropertyDetail />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
