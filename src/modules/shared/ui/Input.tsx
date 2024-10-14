import React from "react";
import { TextInput, StyleSheet, View, ViewStyle } from "react-native";
import { BaseText } from "./Texts";
import { colors } from "@colors/*";

interface IInput {
  placeholder: string;
  value: string;
  error?: boolean;
  errorMessage?: string;
  onChangeText: (text: string) => void;
  secureField?: boolean;
  aditionalStyle?: ViewStyle;
}

export const Input = ({
  placeholder,
  value,
  onChangeText,
  error,
  errorMessage,
  secureField,
  aditionalStyle,
}: IInput) => {
  return (
    <>
      <View
        style={[styles.container, aditionalStyle, error && styles.errorBorder]}
      >
        <TextInput
          secureTextEntry={secureField}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#FFF"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {error && (
        <BaseText textStyles={styles.labelError}>{errorMessage}</BaseText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderRadius: 25,
    paddingHorizontal: 20,
    width: 300,
    height: 35,
    backgroundColor: "rgba(0, 0, 0, 0.459)",
    borderColor: "#FFF",
    borderWidth: 1,
  },
  input: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
    flex: 1,
  },
  labelError: {
    alignSelf: "flex-start",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 10,
    color: colors.ERROR,
  },
  errorBorder: {
    borderColor: colors.ERROR,
  },
});
