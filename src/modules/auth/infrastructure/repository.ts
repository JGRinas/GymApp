import { API } from "@config/axios";
import { AuthRepository } from "../domain/repository";
import { SignIn, SignUp } from "../domain";

export default function createAuthRepository(): AuthRepository {
  return {
    login,
    register,
  };
}

async function login({ email, password }: SignIn) {
  const response = await API.AUTH.post<any>("/login", {
    email: email.trim(),
    password: password.trim(),
  });
  return response.data;
}
async function register({
  email,
  name,
  last_name,
  password,
  passwordConfirmation,
}: SignUp) {
  const response = await API.AUTH.post<any>("/register", {
    email: email.trim(),
    name: name.trim(),
    last_name: last_name.trim(),
    password: password.trim(),
    passwordConfirmation: passwordConfirmation.trim(),
  });
  return response.data;
}
