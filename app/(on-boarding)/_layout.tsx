import React, { useEffect } from "react";
import { SplashScreen, Stack, useRootNavigationState } from "expo-router";

export default function OnBoardingLayout() {
  const rootNavigationState = useRootNavigationState();
  const navigatorReady = rootNavigationState?.key != null;

  useEffect(() => {
    if (!navigatorReady) return;

    SplashScreen.hideAsync();
  }, [navigatorReady]);

  return <Stack screenOptions={{ headerShown: false }} />;
}
