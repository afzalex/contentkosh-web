// Re-export API types for convenience
export type { User, LoginRequest, RegisterRequest, AuthResponse } from '@/lib/api';

// Extended types for our application
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'teacher' | 'student';
}
