import { API } from "@config/axios";
import { RoutineRepository } from "../domain/repository";

export default function createRoutineRepository(): RoutineRepository {
  return {
    getRoutines,
    getRoutine,
  };
}

async function getRoutines() {
  const response = await API.ROUTINE.get("/user");
  return response.data;
}

async function getRoutine(id: string) {
  const response = await API.ROUTINE.get(`/${id}`);
  return response.data;
}
