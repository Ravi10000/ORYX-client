import "./App.css";
import Loader from "./components/Loader";
import Routes from "./routes";
import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";

function App() {
  const [ isFontLoaded, setIsFontLoaded ] = useState(false)
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Noto Sans"],
      },
      loading: () => {
        console.log("Fonts loaded")
        setIsFontLoaded(true)
      }
    });
  }, []);

  if(!isFontLoaded) return <Loader />
  
  return <>{Routes()}</>;
}

export default App;
