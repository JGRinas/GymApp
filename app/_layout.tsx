import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { LexendTera_400Regular } from "@expo-google-fonts/lexend-tera";
import { RedHatText_400Regular } from "@expo-google-fonts/red-hat-text";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import CustomHeader from "@shared/ui/CutomHeader";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

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

  return (
    <>
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
    </>
  );
}
