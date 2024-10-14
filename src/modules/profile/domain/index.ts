export interface UserProfile {
  name: string;
  last_name: string;
  email: string;
  photo?: string;
  role: TRole;
  plan: string;
  routine: string;
  status: "active" | "inactive";
}

export type TRole = "admin" | "coach" | "member";

export interface UserPlan {
  name: string;
  description: string;
  price: number;
  duration: number;
  _id: string;
  createdAt: string;
}
