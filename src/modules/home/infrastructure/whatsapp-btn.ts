import { Alert, Linking } from "react-native";

export const openWhatsApp = (message: string) => {
  const phoneNumber = "+54379 4560224";
  const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  Linking.openURL(url).catch(() => {
    Alert.alert("Error", "Asegúrate de tener WhatsApp instalado.");
  });
};
