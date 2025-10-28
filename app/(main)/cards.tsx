import React from "react";
import { Text } from "react-native";
import { BaseScreen } from "@/components/layouts/base-screen";

export default function CardsScreen() {
  return (
    <BaseScreen>
      <Text style={{ color: "#333", padding: 20 }}>Flashcards</Text>
    </BaseScreen>
  );
}
