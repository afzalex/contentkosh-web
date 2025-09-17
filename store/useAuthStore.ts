import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/lib/api';
import { authApi } from '@/lib/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: true,
      isInitialized: false,
      login: (user: User, token: string) => {
        console.log('Auth store login called with:', { user, token });
        authApi.setToken(token);
        set({
          user,
          token,
          isAuthenticated: true,
          isLoading: false,
          isInitialized: true,
        });
        console.log('Auth state updated');
      },
      logout: async () => {
        await authApi.logout();
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
          isInitialized: true,
        });
      },
      setLoading: (loading: boolean) =>
        set({ isLoading: loading }),
      initializeAuth: () => {
        console.log('initializeAuth called');
        const token = authApi.getToken();
        console.log('Token from localStorage:', token);
        
        if (token) {
          // Set token in OpenAPI for future requests
          authApi.setToken(token);
          
          // Get the current state from persist
          const currentState = get();
          console.log('Current state from persist:', currentState);
          
          // If we already have user data from persist, use it
          if (currentState.user && currentState.isAuthenticated) {
            console.log('Using persisted user data');
            set({ 
              token, 
              isAuthenticated: true, 
              user: currentState.user,
              isLoading: false,
              isInitialized: true
            });
            return;
          }
          
          // Create a fallback user object since we have a token
          console.log('Creating fallback user');
          const fallbackUser = {
            id: 1,
            email: 'user@example.com',
            name: 'User',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          set({ 
            token, 
            isAuthenticated: true, 
            user: fallbackUser,
            isLoading: false,
            isInitialized: true
          });
        } else {
          console.log('No token found, setting not authenticated');
          set({ 
            isLoading: false,
            isInitialized: true,
            isAuthenticated: false,
            user: null,
            token: null
          });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isInitialized: state.isInitialized,
      }),
    }
  )
);
