import CustomButton from "@/components/CustomButton";
import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegistrationScreen = () => {
  const register = () => {
    console.log("Registering...");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          resizeMode="cover"
          source={require("@/assets/images/mountains.jpg")}
        >
          <View style={styles.formContainer}>
            <Text style={styles.text}>Registration</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your login"
              //   autoComplete="email"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              autoComplete="email"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              autoComplete="password"
            />
            <CustomButton
              title="Register"
              onPress={(event) => console.log(event)}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  formContainer: {
    marginTop: 219,
    backgroundColor: "#FFF",
  },
  text: { fontSize: 28, lineHeight: 32, marginTop: -6 },
  input: {},
});

export default RegistrationScreen;
