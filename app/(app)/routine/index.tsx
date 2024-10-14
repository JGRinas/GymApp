import BackgroundImage from "@shared/ui/BackgroundImage";
import RoutineCard from "../../../src/modules/routines/ui/RoutineCard";
import { useGetRoutines } from "../../../src/modules/routines/infrastructure/hooks/useGetRoutines";
import { FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

function RoutineScreen() {
  const { routines } = useGetRoutines();
  const navigation = useRouter();
  return (
    <BackgroundImage>
      <FlatList
        data={routines}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <RoutineCard
            image={item.image}
            title={item.day}
            description={item.name}
            onPress={() =>
              navigation.push({
                pathname: "/(app)/routine/routine-detail",
                params: { id: item._id },
              })
            }
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
});

export default RoutineScreen;
