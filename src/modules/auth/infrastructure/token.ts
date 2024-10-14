import * as SecureStore from "expo-secure-store";

export const saveJWT = async (token: string) =>
  await SecureStore.setItemAsync("user-jwt", token);

export const getJWT = async () => {
  return await SecureStore.getItemAsync("user-jwt");
};

export const removeJWT = async () =>
  await SecureStore.deleteItemAsync("user-jwt");
