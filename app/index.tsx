import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen";

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
  },
  {
    id: "LG16-ant5-0J25",
    title: "React Native",
  },
];

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
  });

  const [courses, setCourses] = useState(COURSES);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View style={styles.container}>
    //   <ImageBackground
    //     source={require("../assets/images/night.jpg")}
    //     style={styles.background}
    //     resizeMode="cover"
    //   >
    //     <View style={styles.content}>
    //       <Text style={[styles.text, { fontFamily: "Inter-Medium" }]}>
    //         Це текст поверх фонового зображення
    //       </Text>
    //       <FlatList
    //         data={courses}
    //         renderItem={({ item }) => (
    //           <Text style={{ color: "#f6ff" }}>{item.title}</Text>
    //         )}
    //         keyExtractor={(item) => item.id}
    //       />
    //     </View>
    //   </ImageBackground>
    // </View>
    <RegistrationScreen />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default App;
