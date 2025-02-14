import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegistrationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require("@/assets/images/mountains.jpg")}
      >
        <View>
          <Text style={styles.text}>Registration</Text>
          <Button title="Register" color={styles.button.backgroundColor} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 28, lineHeight: 32, marginTop: -6 },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  button: {
    borderRadius: "100px",
    backgroundColor: "#FF6C00",
  },
});

export default RegistrationScreen;
