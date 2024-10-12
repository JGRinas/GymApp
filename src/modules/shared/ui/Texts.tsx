import { colors } from "@colors/theme/colors";
import React, { ReactNode } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

interface IBaseText {
  textStyles?: TextStyle | TextStyle[];
  children: ReactNode;
  additionalProps?: Text["props"];
}

export const BaseText = ({
  textStyles,
  children,
  additionalProps,
}: IBaseText) => {
  return (
    <Text style={[styles.text, textStyles]} {...additionalProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.TERTIARY,
    fontWeight: "bold",
    fontSize: 12,
    fontFamily: "RedHatText_400Regular",
  },
});
