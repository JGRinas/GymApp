import { ProfileRepository } from "../domain/repository";

export function getProfile(repository: ProfileRepository) {
  return async function () {
    return await repository.getProfile();
  };
}

export function getUserPlan(repository: ProfileRepository) {
  return async function () {
    return await repository.getUserPlan();
  };
}

export function editProfilePhoto(repository: ProfileRepository) {
  return async function (photo: string) {
    return await repository.editProfilePhoto(photo);
  };
}
