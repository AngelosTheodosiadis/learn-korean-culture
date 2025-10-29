import React from "react";
import {
  View,
  ViewProps,
  StyleSheet,
  ScrollView,
  ScrollViewProps,
  Pressable,
  Text,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { colors, fonts, shadow } from "@/constants/theme";

interface BaseScreenProps {
  children?: React.ReactNode;
  scrollable?: boolean;
  style?: ViewStyle;
  showHeader?: boolean;
  title?: string;
  onHeaderPress?: () => void;
}

export default function BaseScreen({
  children,
  scrollable = true,
  style,
  showHeader = false,
  title,
  onHeaderPress,
}: BaseScreenProps) {
  const { bottom } = useSafeAreaInsets();

  const content = (
    <View
      style={[
        styles.content,
        style,
        {
          paddingBottom: bottom,
        },
      ]}
    >
      {showHeader && (
        <View style={styles.header}>
          {title ? <Text style={styles.headerText}>{title}</Text> : null}
        </View>
      )}
      {children}
    </View>
  );

  const Wrapper: React.ComponentType<ViewProps | ScrollViewProps> = scrollable
    ? ScrollView
    : View;

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <View style={styles.shadowWrapper}>
        <Wrapper
          style={styles.scrollView}
          contentContainerStyle={scrollable ? { flexGrow: 1 } : undefined}
          showsVerticalScrollIndicator={false}
        >
          {content}
        </Wrapper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadowWrapper: {
    flex: 1,
    ...shadow.strong,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.background,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 5,
  },
  header: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 70,
  },
  headerButton: {
    position: "absolute",
    left: 15,
    padding: 6,
  },
  headerText: {
    fontFamily: fonts.family.regular,
    fontSize: 20,
    fontWeight: "400",
    color: colors.textPrimary,
  },
});
