import { colors } from "@colors/*";
import { BaseText } from "@shared/ui/Texts";
import React from "react";
import { View, StyleSheet } from "react-native";

interface InstructionStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

const InstructionStep: React.FC<InstructionStepProps> = ({
  stepNumber,
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <BaseText textStyles={styles.stepNumber}>{stepNumber}</BaseText>
      </View>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <View style={styles.lineVertical} />
        <View style={styles.content}>
          <BaseText textStyles={styles.title}>{title}</BaseText>
          <BaseText textStyles={styles.description}>{description}</BaseText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    marginVertical: 10,
    gap: 5,
  },
  lineVertical: {
    height: "100%",
    borderLeftWidth: 1,
    borderColor: colors.QUATERNARY,
    marginLeft: 15,
    width: 30,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#d2ff00",
    justifyContent: "center",
    alignItems: "center",
  },
  stepNumber: {
    color: "#000",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#2c2c2c",
    borderRadius: 10,
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    color: "#ccc",
    fontSize: 14,
  },
});

export default InstructionStep;
