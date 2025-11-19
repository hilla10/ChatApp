/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const { data } = await axiosInstance.get('/auth/check');

      set({
        authUser: data,
      });
    } catch (error) {
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signup: async (formData) => {
    try {
      set({ isSigningUp: true });
      const { data } = await axiosInstance.post('/auth/signup', formData);
      set({ authUser: data, isSigningUp: false });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (formData) => {
    try {
      set({ isLoggingIn: true });
      const { data } = await axiosInstance.post('/auth/login', formData);
      set({ authUser: data, isLoggingIn: false });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post('/auth/logout');
      set({ authUser: null });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Logout failed');
    }
  },

  updateProfile: async (formData) => {
    set({ isUpdatingProfile: true });
    try {
      const { data } = await axiosInstance.put(
        '/auth/update-profile',
        formData
      );
      set({ authUser: data });
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Profile update failed');
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
