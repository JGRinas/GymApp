import { API } from "@config/axios";
import { ProfileRepository } from "../domain/repository";

export default function createProfileRepository(): ProfileRepository {
  return {
    getProfile,
    getUserPlan,
    editProfilePhoto,
  };
}

async function getProfile() {
  const response = await API.USER.get("/profile");
  return response.data;
}

async function getUserPlan() {
  const response = await API.PLAN.get(`/my-plan`);
  return response.data;
}

async function editProfilePhoto(formData: FormData) {
  const response = await API.USER.put("/profile/photo", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}
