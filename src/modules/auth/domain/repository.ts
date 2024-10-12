import { SignIn, SignUp } from ".";

export interface AuthRepository {
  login: (data: SignIn) => Promise<any>;
  register: (data: SignUp) => Promise<any>;
}
