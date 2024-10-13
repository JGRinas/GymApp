import { useMutation } from "@tanstack/react-query";
import createAuthRepository from "../repository";
import { createAccount } from "../../application";
import { SignUp } from "../../domain";

const authRepo = createAuthRepository();

export const useCreateAccount = () => {
  const {
    mutateAsync: signUp,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ["createAccount"],
    mutationFn: async (data: SignUp) => createAccount(authRepo)(data),
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });
  return { signUp, isPending, isError };
};
