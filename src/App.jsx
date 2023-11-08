import "./App.css";
import Loader from "./components/Loader";
import useFonts from "./hooks/useFonts";
import Routes from "./routes";

function App() {
  // const [isFontsLoaded]   = useFonts(["Noto Sans"]);
  const [isFontsLoaded]   = useFonts(["Poppins"]);
  const _Routes           = Routes();

  if (!isFontsLoaded) return <Loader />;

  return <>{_Routes}</>;
}

export default App;
