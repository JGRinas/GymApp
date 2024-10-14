import { useMutation } from "@tanstack/react-query";
import { editProfilePhoto } from "../../application";
import createProfileRepository from "../repository";
import { fetchUserInfo } from "../../../auth/infrastructure/slices";
import { useAppDispatch } from "@config/store";

const planRepository = createProfileRepository();

export const useEditPhoto = () => {
  const dispatch = useAppDispatch();
  const {
    mutateAsync: editPhoto,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ["profile-photo"],
    mutationFn: async (photo: string) =>
      editProfilePhoto(planRepository)(photo),
    onSuccess: async () => {
      await dispatch(fetchUserInfo());
    },
    onError: (error) => console.error(error),
  });
  return { editPhoto, isPending, isError };
};
