import { Tabs } from "expo-router";
import { colors } from "@/constants/theme";
import {
  HomeIcons,
  CultureIcons,
  CardIcons,
  AccountIcons,
} from "@/components/icons";

export default function MainLayout() {
  return (
    <Tabs
      detachInactiveScreens={false}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        lazy: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          paddingTop: 10,
        },
        sceneStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? <HomeIcons.Active /> : <HomeIcons.Inactive />,
        }}
      />
      <Tabs.Screen
        name="culture"
        options={{
          title: "Culture tips",
          tabBarIcon: ({ focused }) =>
            focused ? <CultureIcons.Active /> : <CultureIcons.Inactive />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Flash Cards",
          tabBarIcon: ({ focused }) =>
            focused ? <CardIcons.Active /> : <CardIcons.Inactive />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) =>
            focused ? <AccountIcons.Active /> : <AccountIcons.Inactive />,
        }}
      />
    </Tabs>
  );
}
