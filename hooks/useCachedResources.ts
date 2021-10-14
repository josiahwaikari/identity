import { FontAwesome } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Image } from "react-native";

function cacheImages(images: any) {
  return images.map((image: any) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        const imageAssets = cacheImages([
          require("../screens/onboarding/assets/identity.png"),
          require("../screens/onboarding/assets/automatic-tagging.png"),
          require("../screens/onboarding/assets/quick-easy-setup.png"),
        ]);

        await Promise.all([...imageAssets]);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
