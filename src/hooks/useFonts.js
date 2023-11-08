import { useEffect, useState } from "react";
import WebFont from "webfontloader";

const useFonts = (arrOffonts) => {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: arrOffonts,
      },
      loading: () => {
        setIsFontsLoaded(true);
      },
      inactive: () => {
        console.error("Browser not support fonts or Fonts may be not loaded.");
      },
    });
  }, []);

  return [isFontsLoaded, setIsFontsLoaded]
};

export default useFonts;
