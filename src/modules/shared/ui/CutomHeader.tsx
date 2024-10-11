import { Logo3Icon } from "@assets/icons";
import React from "react";
import { View, StyleSheet } from "react-native";

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Logo3Icon />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000000",
    padding: 15,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default CustomHeader;
