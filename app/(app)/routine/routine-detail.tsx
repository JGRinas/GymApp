import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useGetRoutine } from "../../../src/modules/routines/infrastructure/hooks/useGetRoutines";
import RoutineCard from "../../../src/modules/routines/ui/RoutineCard";
import InstructionStep from "../../../src/modules/routines/ui/InstructionStep";
import { colors } from "@colors/*";

const RoutineDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>(),
    { routine } = useGetRoutine(id);

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handlePress = (exerciseId: string) => {
    setExpandedId((prev) => (prev === exerciseId ? null : exerciseId));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={routine?.exercises}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <>
            <RoutineCard
              image={item.image}
              title={item.name}
              description={`${item.sets}x${item.reps} | ${item.restTime} segundos`}
              onPress={() => handlePress(item._id)}
            />
            {expandedId === item._id ? (
              <FlatList
                data={item?.instructions}
                keyExtractor={(item) => item._id}
                renderItem={({ item, index }) => (
                  <InstructionStep
                    description={item.description}
                    title={item.title}
                    stepNumber={index + 1}
                  />
                )}
                contentContainerStyle={styles.listContainer}
              />
            ) : null}
          </>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  listContainer: {
    padding: 16,
  },
});

export default RoutineDetails;
