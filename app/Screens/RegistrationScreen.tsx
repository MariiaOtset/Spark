import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegistrationScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require("../assets/images/mountains.jpg")}
      >
        <Text style={styles.text}>Registration</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 28, lineHeight: 32, marginTop: -6 },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default RegistrationScreen;
