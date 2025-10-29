import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/constants/theme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { prefetch } = useRouter();
  const { top } = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    "Tex-Gyre-Adventor-Regular": require("@/assets/fonts/texgyreadventor-regular.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      prefetch("/home");
      prefetch("/culture");
      prefetch("/cards");
      prefetch("/account");
    }
  }, [fontsLoaded, prefetch]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: top, backgroundColor: colors.black }} />
      <StatusBar backgroundColor={colors.primary} style="light" />
      <Stack
        screenOptions={{ headerShown: false }}
        initialRouteName="(auth)/welcome"
      >
        <Stack.Screen name="(auth)/welcome" />
      </Stack>
    </View>
  );
}
