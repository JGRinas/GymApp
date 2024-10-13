export interface SignUp {
  name: string;
  last_name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface UserProfile {
  name: string;
  last_name: string;
  email: string;
  photo?: string;
  role: TRole;
  plan: string;
  routine: string;
}

export type TRole = "admin" | "coach" | "member";

export interface LoginResponse {
  token: string;
}
