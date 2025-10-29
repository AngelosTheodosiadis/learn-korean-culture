import React from "react";
import { View, StyleSheet } from "react-native";

import { TabIcon, TabIconType } from "@/components/icons/svg-icons";
import { shadow } from "@/constants/theme";

interface Props {
  type: TabIconType;
  active: boolean;
  size?: number;
}

export function TabBarIcon({ type, active, size }: Props) {
  return (
    <View style={styles.shadow}>
      <TabIcon type={type} active={active} size={size} />
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: shadow.medium,
});
