import { colors } from "@colors/*";
import { Input } from "@shared/ui/Input";
import { useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useGetExercises } from "../../../src/modules/exercises/infrastructure/hooks/useGetExercises";
import InstructionStep from "../../../src/modules/routines/ui/InstructionStep";
import RoutineCard from "../../../src/modules/routines/ui/RoutineCard";

function SearchScreen() {
  const [value, setValue] = useState<string>("");
  const { exercises } = useGetExercises();

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredExercises = useMemo(() => {
    if (!value) return exercises;
    return exercises?.filter((exercise) =>
      exercise.name.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, exercises]);

  const handlePress = (exerciseId: string) => {
    setExpandedId((prev) => (prev === exerciseId ? null : exerciseId));
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Buscar ejercicio"
        onChangeText={(text) => setValue(text)}
        value={value}
        aditionalStyle={{ width: "100%", marginBottom: 10 }}
      />
      <FlatList
        data={filteredExercises}
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
              />
            ) : null}
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    padding: 16,
  },
});

export default SearchScreen;
