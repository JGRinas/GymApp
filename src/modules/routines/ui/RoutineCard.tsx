import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { BaseText } from "@shared/ui/Texts";

interface RoutineCardProps {
  image: string;
  title: string;
  description: string;
  onPress?: (prop?: any) => void;
}

const RoutineCard: React.FC<RoutineCardProps> = ({
  image,
  title,
  description,
  onPress,
}) => (
  <TouchableOpacity disabled={!onPress} onPress={onPress}>
    <ImageBackground source={{ uri: image }} style={styles.imageBackground}>
      <View style={styles.overlayContainer}>
        <BlurView intensity={1000} tint="dark" style={styles.blurContainer}>
          <BaseText textStyles={styles.title}>{title}</BaseText>
          <BaseText textStyles={styles.description}>{description}</BaseText>
        </BlurView>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    justifyContent: "flex-end",
  },
  overlayContainer: {
    padding: 10,
    width: "45%",
  },
  blurContainer: {
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
    fontSize: 14,
    marginTop: 2,
    fontWeight: "300",
  },
});

export default RoutineCard;
