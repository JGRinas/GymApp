import { API } from "@config/axios";
import { ExerciseRepository } from "../domain/repository";

export default function createExerciseRepository(): ExerciseRepository {
  return {
    getAllExercises,
  };
}

async function getAllExercises() {
  const response = await API.EXERCISE.get("/");
  return response.data;
}
