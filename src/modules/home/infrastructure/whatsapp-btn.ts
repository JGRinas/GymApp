import { Alert, Linking } from "react-native";

export const openWhatsApp = () => {
  const phoneNumber = "+54379 4560224";
  const message = "Hola! Quisiera consultar sobre mi plan de entrenamiento.";
  const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  Linking.openURL(url).catch(() => {
    Alert.alert("Error", "Asegúrate de tener WhatsApp instalado.");
  });
};
