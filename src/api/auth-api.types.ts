export type AuthSignUp = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type AuthSignIn = {
  login: string;
  password: string;
};
