import { Tabs } from "expo-router";
import { colors } from "@/constants/theme";
import { TabBarIcon } from "@/components/icons/tab-icon";

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          paddingTop: 12,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon type="home" active={focused} size={44} />
          ),
        }}
      />
      <Tabs.Screen
        name="culture"
        options={{
          title: "Culture",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon type="culture" active={focused} size={50} />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon type="card" active={focused} size={80} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon type="account" active={focused} size={40} />
          ),
        }}
      />
    </Tabs>
  );
}
