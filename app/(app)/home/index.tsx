import BackgroundImage from "@shared/ui/BackgroundImage";
import { Banner } from "@shared/ui/Banner";
import PlanCard from "@shared/ui/PlanCard";
import WelcomeCard from "@shared/ui/WelcomeCard";
import { StyleSheet, View } from "react-native";
import { openWhatsApp } from "../../../src/modules/home/infrastructure/whatsapp-btn";

function WelcomeScreen() {
  return (
    <BackgroundImage source="Background2">
      <View style={styles.container}>
        <WelcomeCard />
        <PlanCard />
        <View style={styles.banner}>
          <Banner
            icon={"WhatsAppIcon"}
            text="CONSULTAR POR WHATSAPP"
            onPress={openWhatsApp}
          />
          <Banner text="ACCEDÉ A TU RUTINA" variant="second" />
        </View>
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 25,
    gap: 15,
  },
  banner: {
    gap: 15,
  },
});

export default WelcomeScreen;
