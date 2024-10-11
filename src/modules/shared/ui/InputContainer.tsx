import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface IInputContainer {
  children: ReactNode;
  variant?: "normal" | "secondary";
  additionalStyles?: ViewStyle;
}

export const InputContainer = ({
  variant = "normal",
  children,
  additionalStyles,
}: IInputContainer) => {
  return (
    <View style={[styles.container, styles[variant], additionalStyles]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 23,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    gap: 10,
  },
  normal: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  secondary: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
});
