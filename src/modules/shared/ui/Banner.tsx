import React from "react";
import { View, StyleSheet } from "react-native";
import { BaseText } from "./Texts";
import { colors } from "@colors/*";

interface IBanner {
  text: string;
  variant?: "first" | "second";
  icon?: React.ReactNode;
}

export const Banner = ({ text, variant = "first", icon }: IBanner) => {
  return (
    <View style={[styles.banner, styles[variant]]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <BaseText textStyles={styles.text}>{text}</BaseText>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  first: {
    backgroundColor: colors.PRIMARY,
  },
  second: {
    backgroundColor: colors.TERTIARY,
  },
  text: {
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});
