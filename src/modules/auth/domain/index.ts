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
