
import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { BaseText } from "./Texts";
import { colors } from "@colors/*";

interface IButton {
  text: string;
  handlePress: any;
  variant?: "normal" | "secondary";
  disabled?: boolean;
  additionalStyles?: ViewStyle | ViewStyle[];
  textStyles?: TextStyle;
}

export const Button = ({
  text,
  handlePress,
  variant = "normal",
  disabled,
  additionalStyles,
  textStyles,
}: IButton) => (
  <TouchableOpacity
    style={[
      styles.button,
      styles[variant],
      disabled ? styles.disabled : {},
      additionalStyles,
    ]}
    onPress={handlePress}
    disabled={disabled}
  >
    <BaseText textStyles={textStyles}>{text}</BaseText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  normal: {
    backgroundColor: colors.PRIMARY,
  },
  secondary: {
    backgroundColor: "#D9D9D966",
  },

  disabled: {
    opacity: 0.5,
  },
});
