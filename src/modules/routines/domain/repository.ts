import { Routine, Routines } from ".";

export interface RoutineRepository {
  getRoutines: () => Promise<Routines[]>;
  getRoutine: (id: string) => Promise<Routine>;
}
