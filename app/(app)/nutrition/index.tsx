import { colors } from "@colors/*";
import { ScrollView, StyleSheet } from "react-native";
import RoutineCard from "../../../src/modules/routines/ui/RoutineCard";
import nutritionSteps from "../../../src/modules/routines/infrastructure/nutrition-mock";
import InstructionStep from "../../../src/modules/routines/ui/InstructionStep";

function NutritionScreen() {
  return (
    <ScrollView style={styles.container}>
      <RoutineCard
        image={"https://noticias.uai.edu.ar/media/98433/plato-ideal.jpg"}
        description=""
        title="INFORMACIÓN NUTRICIONAL DEL DÍA"
        aditionalStyles={{ width: "100%" }}
        blurIntensity={100}
      />
      {nutritionSteps.map(({ description, id, title }) => (
        <InstructionStep
          key={id}
          title={title}
          stepNumber={id}
          description={description}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    padding: 16,
  },
  listContainer: {
    padding: 16,
  },
});
export default NutritionScreen;
