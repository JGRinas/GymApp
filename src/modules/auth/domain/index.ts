export interface SignUp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignIn {
  email: string;
  password: string;
}
