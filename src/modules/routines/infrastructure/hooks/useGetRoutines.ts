import { useAppSelector } from "@config/store";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import createRoutineRepository from "../repository";
import { getRoutine, getRoutines } from "../../application";

const routineRepository = createRoutineRepository();

export const useGetRoutines = () => {
  const profile = useAppSelector((state) => state.AuthSlice.profile);
  const {
    data: routines,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["routines", profile],
    queryFn: async () => {
      return await getRoutines(routineRepository)();
    },
  });
  return { routines, isError, isLoading };
};

export const useGetRoutine = (id: string) => {
  const {
    data: routine,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["routine"],
    queryFn: async () => {
      return await getRoutine(routineRepository)(id);
    },
  });
  return { routine, isError, isLoading };
};
