import { useMutation } from "@tanstack/react-query";
import { editProfilePhoto } from "../../application";
import createProfileRepository from "../repository";
import { fetchUserInfo } from "../../../auth/infrastructure/slices";
import { useAppDispatch } from "@config/store";
import { useRouter } from "expo-router";

const planRepository = createProfileRepository();

export const useEditPhoto = () => {
  const dispatch = useAppDispatch(),
    navigation = useRouter();
  const {
    mutateAsync: editPhoto,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ["profile-photo"],
    mutationFn: async (formData: FormData) =>
      editProfilePhoto(planRepository)(formData),
    onSuccess: async () => {
      await dispatch(fetchUserInfo());
      navigation.back();
    },
    onError: (error) => console.error(error),
  });
  return { editPhoto, isPending, isError };
};
