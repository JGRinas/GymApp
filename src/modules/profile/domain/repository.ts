import { UserPlan, UserProfile } from ".";

export interface ProfileRepository {
  getProfile: () => Promise<UserProfile>;
  getUserPlan: () => Promise<UserPlan>;
  editProfilePhoto: (formData: FormData) => Promise<UserProfile>;
}
