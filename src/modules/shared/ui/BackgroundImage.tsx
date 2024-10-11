import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Background, Background2 } from "@assets/images";

interface IBackgroundImage {
  source?: "Background" | "Background2";
  children: React.ReactNode;
}

const images = {
  Background,
  Background2,
};

const BackgroundImage = ({
  children,
  source = "Background",
}: IBackgroundImage) => (
  <ImageBackground source={images[source]} style={styles.background}>
    <View style={styles.overlay}>{children}</View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.397)",
  },
});

export default BackgroundImage;
