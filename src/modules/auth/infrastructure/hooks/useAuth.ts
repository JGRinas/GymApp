import { useMutation } from "@tanstack/react-query";
import createAuthRepository from "../repository";
import { createAccount, login } from "../../application";
import { SignIn, SignUp } from "../../domain";
import { saveJWT } from "../token";
import { useNavigation, useRouter } from "expo-router";
import { fetchUserInfo, signIn } from "../slices";
import { useAppDispatch } from "@config/store";

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

export const useLogin = () => {
  const navigation = useNavigation(),
    route = useRouter(),
    dispatch = useAppDispatch();

  const { mutateAsync, isPending, isError } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: SignIn) => login(authRepo)(data),
    onSuccess: async ({ token }) => {
      await dispatch(fetchUserInfo());
      dispatch(signIn());
      await saveJWT(token);
      route.push("/(app)/home/");
    },
    onError: (error) => console.error(error),
  });
  return { mutateAsync, isPending, isError };
};
