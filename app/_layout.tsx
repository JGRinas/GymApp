import { StatusBar } from "react-native";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Stack } from "expo-router";

import { LexendTera_400Regular } from "@expo-google-fonts/lexend-tera";
import { RedHatText_400Regular } from "@expo-google-fonts/red-hat-text";
import "react-native-reanimated";
import CustomHeader from "@shared/ui/CutomHeader";
import { store } from "@config/store";

SplashScreen.preventAutoHideAsync();

const persistor = persistStore(store);

export default function RootLayout() {
  const [loaded] = useFonts({
    LexendTera_400Regular,
    RedHatText_400Regular,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#000"
            translucent={false}
          />
          <Stack
            screenOptions={{
              header: () => <CustomHeader />,
            }}
          />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
