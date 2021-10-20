import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import SecureStorage from "./services/secure-storage";
import Navigation from "./navigation";
import useColorScheme from "./hooks/useColorScheme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [isFirstLoad, setIsFirstLoad] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      const notFirstLoad = await SecureStorage.Retrieve("notFirstLoad");

      if (!notFirstLoad) {
        setIsFirstLoad(true);
      }
    })();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} isFirstLoad={isFirstLoad} />

        <StatusBar style="dark" />
      </SafeAreaProvider>
    );
  }
}
