import { RoutineRepository } from "../domain/repository";

export function getRoutines(repository: RoutineRepository) {
  return async function () {
    return await repository.getRoutines();
  };
}

export function getRoutine(repository: RoutineRepository) {
  return async function (id: string) {
    return await repository.getRoutine(id);
  };
}
