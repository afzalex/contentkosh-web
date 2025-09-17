import { UsersService } from '@/lib/api';
import { LoginRequest, RegisterRequest, AuthResponse } from '@/lib/api';
import { OpenAPI } from '@/lib/api';

// Configure the API base URL
OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export const authApi = {
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    try {
      // TODO: Remove this mock when backend is ready
      console.log('Mock login for testing - credentials:', credentials);
      
      // Mock response for testing
      const mockResponse: AuthResponse = {
        user: {
          id: 1,
          email: credentials.email,
          name: 'Test User',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        token: 'mock-jwt-token-' + Date.now(),
      };
      
      console.log('Returning mock response:', mockResponse);
      return mockResponse;
      
      // Uncomment when backend is ready:
      // const response = await UsersService.postApiUsersLogin(credentials);
      // return response.data!;
    } catch (error: any) {
      throw new Error(error.body?.message || 'Login failed');
    }
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    try {
      // TODO: Remove this mock when backend is ready
      console.log('Mock register for testing - data:', data);
      
      // Mock response for testing
      const mockResponse: AuthResponse = {
        user: {
          id: 1,
          email: data.email,
          name: data.name,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        token: 'mock-jwt-token-' + Date.now(),
      };
      
      console.log('Returning mock response:', mockResponse);
      return mockResponse;
      
      // Uncomment when backend is ready:
      // const response = await UsersService.postApiUsersRegister(data);
      // return response.data!;
    } catch (error: any) {
      throw new Error(error.body?.message || 'Registration failed');
    }
  },

  getProfile: async (): Promise<any> => {
    try {
      const response = await UsersService.getApiUsersProfile();
      return response.data;
    } catch (error: any) {
      throw new Error(error.body?.message || 'Failed to fetch profile');
    }
  },

  setToken: (token: string) => {
    OpenAPI.TOKEN = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  },

  getToken: (): string | undefined => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token') || undefined;
    }
    return OpenAPI.TOKEN;
  },

  logout: async (): Promise<void> => {
    OpenAPI.TOKEN = undefined;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  },
};
