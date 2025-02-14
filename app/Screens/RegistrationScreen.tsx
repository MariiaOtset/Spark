import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <Text style={styles.title}>Registration</Text>
            <TextInput
              placeholder="Enter your login"
              value={login}
              onChangeText={setLogin}
              style={styles.input}
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              placeholder="Enter your email address"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              autoComplete="email"
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              style={[styles.input, { marginBottom: 0 }]}
              autoComplete="password"
              placeholderTextColor="#BDBDBD"
            />
            <CustomButton
              title="Register"
              onPress={(event) => console.log(event)}
            />
            <Text>
              Already have an account?
              <Text>Log in</Text>
            </Text>
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
    marginTop: "auto",
    padding: 16,
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",
  },
  title: {
    marginTop: 32,
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 30,
    letterSpacing: 0.3,
    fontSize: 30,
  },
  input: {
    // height: 50,
    marginBottom: 16,
    padding: 15,
    flexShrink: 0,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Roboto",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
});

export default RegistrationScreen;
