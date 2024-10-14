import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { BaseText } from "./Texts";
import { colors } from "@colors/*";
import { WhatsAppIcon } from "@assets/icons";

const icons = {
  WhatsAppIcon,
};

interface IBanner {
  text: string;
  variant?: "first" | "second";
  icon?: "WhatsAppIcon";
  onPress?: () => void;
}

export const Banner = ({ text, variant = "first", icon, onPress }: IBanner) => {
  const IconComponent = icon ? icons[icon] : undefined;
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <View style={[styles.banner, styles[`container-${variant}`]]}>
        {!!IconComponent && (
          <View style={styles.icon}>
            <IconComponent />
          </View>
        )}
        <BaseText textStyles={[styles.text, styles[`text-${variant}`]]}>
          {text}
        </BaseText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  "container-first": {
    backgroundColor: colors.PRIMARY,
  },
  "container-second": {
    backgroundColor: colors.TERTIARY,
  },
  text: {
    fontSize: 16,
  },
  "text-first": {
    color: colors.TERTIARY,
  },
  "text-second": {
    color: colors.QUATERNARY,
  },
  icon: {
    marginRight: 10,
  },
});
