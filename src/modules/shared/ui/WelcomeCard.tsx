// WelcomeCard.tsx
import { useAppSelector } from "@config/store";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WelcomeCard = ({ inHome = true }: { inHome?: boolean }) => {
  const profile = useAppSelector((state) => state.AuthSlice.profile);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: profile?.photo ?? "https://via.placeholder.com/100" }}
        style={styles.profileImage}
      />
      <View>
        <Text style={styles.welcomeText}>
          {inHome ? "Bienvenido," : "Alumno"}{" "}
          <Text style={styles.boldText}>{`${profile?.name}${
            inHome ? "!" : ""
          }`}</Text>
        </Text>
        <Text style={styles.subtitle}>Esta es tu información actual:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    marginBottom: -5,
  },
  boldText: {
    fontWeight: "bold",
  },
  subtitle: {
    color: "#d3d3d3",
    fontSize: 14,
    marginTop: 4,
  },
});

export default WelcomeCard;
