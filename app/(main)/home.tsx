import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { colors, fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { BaseScreen } from "@/components/layouts/base-screen";

export default function HomeScreen() {
  const header = (
    <View style={styles.headerContainer}>
      <Pressable style={styles.headerButton}>
        <Ionicons name="reorder-three" size={32} color={colors.textPrimary} />
      </Pressable>
      <Text style={styles.headerText}>Learn Korean Culture</Text>
    </View>
  );

  return (
    <BaseScreen header={header}>
      <Text style={{ color: "#333", padding: 20 }}>
        Basic Guide, Hangul, Pronunciation
      </Text>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
  headerText: {
    fontFamily: fonts.family.regular,
    fontSize: 20,
    color: colors.textPrimary,
    textAlign: "center",
  },
  headerButton: {
    position: "absolute",
    left: 15,
    padding: 6,
  },
});
