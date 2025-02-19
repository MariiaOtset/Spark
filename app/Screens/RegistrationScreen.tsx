import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.container}>
            <ImageBackground
              style={styles.background}
              resizeMode="cover"
              source={require("@/assets/images/mountains.jpg")}
            >
              <View style={styles.formContainer}>
                <Text style={styles.title}>Registration</Text>

                <CustomInput
                  placeholder="Login"
                  value={login}
                  onChangeText={setLogin}
                />
                <CustomInput
                  placeholder="Email address"
                  value={email}
                  onChangeText={setEmail}
                  autoComplete="email"
                />
                <View style={styles.inputContainer}>
                  <CustomInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                    autoComplete="password"
                    style={{ marginBottom: 0 }}
                  />
                  <Pressable
                    onPress={togglePasswordVisibility}
                    style={styles.toggleButton}
                  >
                    <Text style={[styles.toggleText, styles.textBase]}>
                      {isPasswordVisible ? "Hide" : "Show"}
                    </Text>
                  </Pressable>
                </View>

                <CustomButton
                  title="Register"
                  onPress={(event) => console.log(event)}
                />
                <Text style={[styles.textBase, styles.loginLink]}>
                  Already have an account?
                  <Text style={[styles.textBase, styles.loginLink]}>
                    Log in
                  </Text>
                </Text>
              </View>
            </ImageBackground>
          </View>
        </KeyboardAvoidingView>
      </Pressable>
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
    fontFamily: "Roboto-Medium",
    lineHeight: 30,
    letterSpacing: 0.3,
    fontSize: 30,
  },
  inputContainer: {
    position: "relative",
  },
  textBase: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Roboto-Regular",
  },
  toggleButton: {
    position: "absolute",
    top: 0,
    right: 16,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  toggleText: {
    color: "#1B4371",
  },
  loginLink: {
    marginTop: 16,
    marginHorizontal: "auto",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
