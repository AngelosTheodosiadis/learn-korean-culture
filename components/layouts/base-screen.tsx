import React, { memo } from "react";
import { StyleSheet, ScrollView, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, shadow } from "@/constants/theme";

interface BaseScreenProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  style?: ViewStyle;
}

const BaseScreenComponent = ({ header, children, style }: BaseScreenProps) => {
  return (
    <SafeAreaView style={styles.screen}>
      {header && <View style={styles.header}>{header}</View>}
      <View style={[styles.bodyWrapper, style]}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export const BaseScreen = memo(BaseScreenComponent);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
  },
  bodyWrapper: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: -10,
    marginBottom: -30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...shadow.strong,
  },
  scrollView: {
    flex: 1,
  },
});
