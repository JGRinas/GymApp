import { Logo3Icon } from "@assets/icons";
import { useAppDispatch, useAppSelector } from "@config/store";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { BaseText } from "./Texts";
import { colors } from "@colors/*";
import { reset } from "../../auth/infrastructure/slices";
import { useRouter } from "expo-router";
import { removeJWT } from "../../auth/infrastructure/token";

const CustomHeader = () => {
  const isLogged = useAppSelector((state) => state.AuthSlice.isLogged),
    dispatch = useAppDispatch(),
    navigation = useRouter();

  const onLogout = async () => {
    dispatch(reset());
    await removeJWT();
    navigation.replace("/(on-boarding)/");
  };

  return (
    <View style={styles.header}>
      <Logo3Icon />
      {isLogged ? (
        <TouchableOpacity onPress={onLogout}>
          <BaseText textStyles={{ color: colors.PRIMARY }}>
            Cerrar sesión
          </BaseText>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000000",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CustomHeader;
