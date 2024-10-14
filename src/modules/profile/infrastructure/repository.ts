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

async function editProfilePhoto() {
  const response = await API.USER.get(`/profile/photo`);
  return response.data;
}
