export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface User {
  email: string;
  id: string;
}

export interface LoginFormData {
  userName: string;
  password: string;
}

export interface SignupFormData extends LoginFormData {
  confirmPassword: string;
}