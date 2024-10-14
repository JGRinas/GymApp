import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUserPlan } from "../../application";
import createProfileRepository from "../repository";
import { useAppSelector } from "@config/store";

const planRepository = createProfileRepository();

export const useGetPlan = () => {
  const profile = useAppSelector((state) => state.AuthSlice.profile);
  const {
    data: plan,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["plans", profile],
    queryFn: async () => {
      return await getUserPlan(planRepository)();
    },
    refetchInterval: 60 * 60 * 1000,
  });
  return { plan, isError, isLoading };
};
