// SplashScreen.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("AdditionalSplashScreen");
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <ImageBackground
      source={require("../assets/SplashScreen.png")} // Replace with your image path
      style={styles.background}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Cover the entire container
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Background overlay
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default SplashScreen;
