import { ExerciseRepository } from "../domain/repository";

export function getAllExercises(repository: ExerciseRepository) {
  return async function () {
    return await repository.getAllExercises();
  };
}
