import { Exercise } from "../../routines/domain";

export interface ExerciseRepository {
  getAllExercises: () => Promise<Exercise[]>;
}
