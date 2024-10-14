import { useMutation } from "@tanstack/react-query";
import createAuthRepository from "../repository";
import { createAccount, login } from "../../application";
import { SignIn, SignUp } from "../../domain";
import { saveJWT } from "../token";
import { useRouter } from "expo-router";
import { fetchUserInfo, signIn } from "../slices";
import { useAppDispatch } from "@config/store";
import { Alert } from "react-native";

const authRepo = createAuthRepository();

export const useCreateAccount = () => {
  const route = useRouter();
  const {
    mutateAsync: signUp,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ["createAccount"],
    mutationFn: async (data: SignUp) => createAccount(authRepo)(data),
    onSuccess: (data) => {
      route.push({
        pathname: "/(auth)/login",
      });
    },
    onError: (error) => Alert.alert("Error al crear la cuenta"),
  });
  return { signUp, isPending, isError };
};

export const useLogin = () => {
  const route = useRouter(),
    dispatch = useAppDispatch();

  const { mutateAsync, isPending, isError } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: SignIn) => login(authRepo)(data),
    onSuccess: async ({ token }) => {
      await saveJWT(token);
      dispatch(signIn());
      await dispatch(fetchUserInfo());
      route.push("/(app)/home/");
    },
    onError: (error) => Alert.alert("Error al iniciar sesión"),
  });
  return { mutateAsync, isPending, isError };
};
