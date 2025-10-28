import { colors } from "@/constants/theme";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    "Tex-Gyre-Adventor-Regular": require("@/assets/fonts/texgyreadventor-regular.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      router.prefetch("/home");
      router.prefetch("/culture");
      router.prefetch("/cards");
      router.prefetch("/account");
    }
  }, [fontsLoaded, router]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: colors.primary }}>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{ headerShown: false }}
        initialRouteName="(auth)/welcome"
      >
        <Stack.Screen name="(auth)/welcome" />
      </Stack>
    </View>
  );
}
