import "./App.css";
import Loader from "./components/Loader";
import Routes from "./routes";
import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";

function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const _Routes = Routes();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Noto Sans"],
      },
      loading: () => {
        setIsFontLoaded(true);
      },
    });
  }, []);

  if (!isFontLoaded) return <Loader />;

  return <>{_Routes}</>;
}

export default App;
