import "./App.css";
import Routes from "./routes";
import React from "react";

function App() {
  return <React.Suspense fallback="Loading...">{Routes()}</React.Suspense>;
}

export default App;
