import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Business, UserProfile } from '@/lib/api';
import { authApi } from '@/lib/auth';

interface AuthState {
  user: User | null;
  business: Business | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  login: (user: User, business: Business | null, token: string) => void;
  setProfile: (profile: UserProfile) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  initializeAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      business: null,
      token: null,
      isAuthenticated: false,
      isLoading: true,
      isInitialized: false,
      setProfile: (profile: UserProfile) => {
        console.log('Auth store setProfile called with:', profile);
        set({
          user: profile,
          business: profile.businessUsers?.[0]?.business || null,
        });
      },
      login: (user: User, business: Business | null, token: string) => {
        console.log('Auth store login called with:', { user, business, token });
        authApi.setToken(token);
        set({
          user,
          business,
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
          business: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
          isInitialized: true,
        });
      },
      setLoading: (loading: boolean) =>
        set({ isLoading: loading }),
      initializeAuth: async () => {
        const token = authApi.getToken();
        
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
              business: currentState.business,
              isLoading: false,
              isInitialized: true
            });
            return;
          }
          
          // Try to fetch user profile from API
          try {
            console.log('Attempting to fetch user profile from API');
            const userProfile = await authApi.getProfile();
            const businessInfo = await authApi.getBusiness();
            
            set({ 
              token, 
              isAuthenticated: true, 
              user: userProfile,
              business: businessInfo,
              isLoading: false,
              isInitialized: true
            });
            console.log('Successfully fetched user profile and business info from API');
          } catch (error) {
            console.warn('Failed to fetch user profile from API, using fallback:', error);
            // Create a fallback user object since we have a token but API is not available
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
              business: null,
              isLoading: false,
              isInitialized: true
            });
          }
        } else {
          console.log('No token found, setting not authenticated');
          set({ 
            isLoading: false,
            isInitialized: true,
            isAuthenticated: false,
            user: null,
            business: null,
            token: null
          });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        business: state.business,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isInitialized: state.isInitialized,
      }),
    }
  )
);
