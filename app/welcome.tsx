import { colors, fonts, shadow } from "@/constants/theme";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("@/assets/images/lkc-welcome-frame.png")}
    >
      <View style={styles.illustrationContainer}>
        <Text style={styles.textTop}>Welcome to</Text>
        <Pressable
          style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
          onPress={() => console.log("Welcome Screen Button Pressed")}
        >
          <Image
            style={styles.illustration}
            source={require("@/assets/images/lkc-welcome-splash.png")}
          />
        </Pressable>
        <Text style={styles.textBottom}>Learn Korean Culture</Text>
      </View>
      <View style={styles.letterContainer}>
        <Image
          style={styles.letter}
          source={require("@/assets/images/lkc-welcome-hangul.png")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  letterContainer: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 162,
    height: 165,
    marginBottom: 20,
    marginRight: 5,
  },
  letter: {
    width: "100%",
    height: "100%",
    tintColor: "#d78c73ff",
  },
  illustrationContainer: {
    width: 283,
    height: 311,
    top: 279,
    backgroundColor: colors.primary,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    ...shadow.medium,
  },
  illustration: {
    width: 250,
    height: 250,
    color: colors.primary,
  },
  textTop: {
    fontFamily: fonts.family.regular,
    fontSize: 18,
    fontWeight: 400,
    color: colors.textPrimary,
  },
  textBottom: {
    fontFamily: fonts.family.regular,
    fontSize: 23,
    fontWeight: 400,
    color: colors.textPrimary,
  },
  pressable: {
    width: 250,
    height: 250,
    ...shadow.medium,
    marginVertical: -4,
  },
  pressed: {
    transform: [{ scale: 0.96 }],
    shadowOpacity: 0.15,
  },
});
