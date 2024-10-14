import { useQuery } from "@tanstack/react-query";
import { getAllExercises } from "../../application";
import createExerciseRepository from "../repository";

const exercisesRepository = createExerciseRepository();

export const useGetExercises = () => {
  const {
    data: exercises,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["exercises"],
    queryFn: async () => {
      return await getAllExercises(exercisesRepository)();
    },
  });
  return { exercises, isError, isLoading };
};
