import React, { useState } from "react";
import { View, Image, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import BackgroundImage from "@shared/ui/BackgroundImage";
import { useEditPhoto } from "../../../src/modules/profile/infrastructure/hooks/useProfile";
import { BaseText } from "@shared/ui/Texts";
import { colors } from "@colors/*";
import { Button } from "@shared/ui/Button";

const EditProfilePhoto = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { editPhoto, isPending, isError } = useEditPhoto();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permiso denegado",
        "Se requiere permiso para acceder a la galería"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Imagen cuadrada
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      Alert.alert("Error", "Por favor selecciona una foto primero");
      return;
    }

    const formData = new FormData();
    formData.append("profilePhoto", {
      uri: selectedImage,
      name: "profile.jpg",
      type: "image/jpeg",
    } as any); // Formato necesario para RN

    try {
      await editPhoto(formData);
      Alert.alert("Éxito", "¡Foto de perfil actualizada!");
    } catch (error) {
      Alert.alert("Error", "Hubo un problema al subir la foto");
    }
  };
  return (
    <BackgroundImage>
      <View style={styles.container}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}
        <Button text="Seleccionar Foto" handlePress={pickImage} />
        <View style={{ marginVertical: 10 }}>
          <Button
            text="Subir Foto"
            handlePress={handleUpload}
            isLoading={isPending}
          />
        </View>
        {isError && (
          <BaseText textStyles={{ color: colors.ERROR }}>
            No se pudo subir la foto
          </BaseText>
        )}
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  placeholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#ccc",
    marginBottom: 20,
  },
});

export default EditProfilePhoto;
