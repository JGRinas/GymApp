import { SignIn, SignUp } from "../domain";
import { AuthRepository } from "../domain/repository";

export function createAccount(repository: AuthRepository) {
  return async function (data: SignUp) {
    return await repository.register(data);
  };
}

export function login(repository: AuthRepository) {
  return async function (data: SignIn) {
    return await repository.login(data);
  };
}

export function getProfile(repository: AuthRepository) {
  return async function () {
    return await repository.getProfile();
  };
}
