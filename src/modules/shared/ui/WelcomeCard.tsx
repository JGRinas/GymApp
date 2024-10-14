// WelcomeCard.tsx
import { EditIcon } from "@assets/icons";
import { useAppSelector } from "@config/store";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const WelcomeCard = ({
  inHome = true,
  onPressImage,
}: {
  inHome?: boolean;
  onPressImage?: () => void;
}) => {
  const profile = useAppSelector((state) => state.AuthSlice.profile);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={inHome}
        style={styles.imageContainer}
        onPress={onPressImage}
      >
        <Image
          source={{
            uri: profile?.photo ?? "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png",
          }}
          style={styles.profileImage}
        />
        {!inHome ? (
          <EditIcon style={styles.icon} width={20} height={20} />
        ) : null}
      </TouchableOpacity>
      <View>
        <Text style={styles.welcomeText}>
          {inHome ? "Bienvenido," : "Alumno"}{" "}
          <Text style={styles.boldText}>{`${profile?.name}${
            inHome ? "!" : ` ${profile?.last_name}`
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
  imageContainer: {
    position: "relative",
    width: 80,
    height: 80,
  },
  icon: {
    position: "absolute",
    right: 0,
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
