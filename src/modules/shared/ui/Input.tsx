import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

interface IInput {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const Input = ({ placeholder, value, onChangeText }: IInput) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#FFF"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
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
});
