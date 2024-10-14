// PlanCard.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "@colors/*";
import { BaseText } from "./Texts";
import { useGetPlan } from "../../profile/infrastructure/hooks/usePlans";
import {
  addDaysToDate,
  formatDate,
  isDateBeforeToday,
} from "@shared/infrastructure/date-functions";
import { useAppSelector } from "@config/store";

const PlanCard = () => {
  const { plan } = useGetPlan(),
    profile = useAppSelector((state) => state.AuthSlice.profile);

  const isPlanExpired = isDateBeforeToday(addDaysToDate(plan?.duration)),
    planTexts = [
      { text: "PAGO:", value: isPlanExpired ? "EXPIRADO" : "AL DÍA" },
      { text: "DEBE:", value: isPlanExpired ? `-$ ${plan?.price}` : "-$" },
      { text: "VENCE:", value: `${formatDate(addDaysToDate(plan?.duration))}` },
      {
        text: "ESTADO DE LA CUENTA:",
        value: profile?.status === "active" ? "ASISTE" : "NO ASISTE",
      },
    ];

  return (
    <View style={{ position: "relative" }}>
      <View style={[styles.planBadgeContainer, !plan && { top: -20 }]}>
        <PlanBadge
          planName={
            plan ? plan?.name : "HABLA CON TU COACH PARA OBTENER UN PLAN"
          }
        />
      </View>
      <View style={styles.card}>
        {planTexts.map(({ text, value }) => (
          <View
            key={text}
            style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
          >
            <BaseText textStyles={styles.infoBaseText}>{text}</BaseText>
            <BaseText textStyles={{ color: "#fff" }}>
              {plan ? value : ""}
            </BaseText>
          </View>
        ))}
      </View>
    </View>
  );
};

export const PlanBadge = ({ planName }: { planName: string }) => {
  return (
    <View style={styles.badgeContainer}>
      <BaseText textStyles={styles.planBaseText}>PLAN</BaseText>
      <BaseText textStyles={styles.planName}>{planName}</BaseText>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 16,
    paddingTop: 26,
    marginVertical: 10,
    gap: 5,
  },
  badgeContainer: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: 230,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 5,
    gap: 10,
    backgroundColor: colors.TERTIARY,
    paddingRight: 10,
  },
  planBadgeContainer: {
    position: "absolute",
    top: -10,
    left: 20,
    zIndex: 1,
    maxWidth: "78%",
  },
  planBaseText: {
    color: "#000",
    backgroundColor: colors.PRIMARY,
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontWeight: "bold",
    fontSize: 14,
  },
  planName: {
    color: colors.PRIMARY,
    fontWeight: "bold",
    fontSize: 16,
  },
  infoBaseText: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 2,
    fontWeight: "bold",
  },
});

export default PlanCard;
