import { Logo2Icon } from "@assets/icons";
import BackgroundImage from "@shared/ui/BackgroundImage";
import { Banner } from "@shared/ui/Banner";
import { Button } from "@shared/ui/Button";
import { InputContainer as ButtonContainer } from "@shared/ui/InputContainer";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

function OnBoarding() {
  const navigation = useRouter();
  return (
    <BackgroundImage>
      <View style={styles.container}>
        <View style={styles.authContainer}>
          <Logo2Icon width={200} height={200} />
          <ButtonContainer additionalStyles={{ flexDirection: "row" }}>
            <Button
              text="REGISTRARME"
              handlePress={() => navigation.push("/(auth)/register")}
              variant="secondary"
            />
            <Button
              text="INICIAR SESIÓN"
              handlePress={() => navigation.push("/(auth)/login")}
            />
          </ButtonContainer>
        </View>
        <Banner text="TU GIMNASIO AL ALCANCE DE TUS MANOS." />
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});

export default OnBoarding;
