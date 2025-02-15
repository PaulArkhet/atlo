import { setSession } from "@/services/jwt.service";
import axios from "axios";
import { create } from "zustand";

const useAuthStore = create<{
  isBloggerLoggedIn: boolean;
  setIsBloggerLoggedIn: (isLoggedIn: boolean) => void;
  user: any;
  authLoading: boolean;
  tokenLoading: boolean;
  setUser: (args: any) => void;
  logoutService: () => void;
  loginService: (username: any, password: any) => void;
}>((set, get) => ({
  isBloggerLoggedIn: false,
  setIsBloggerLoggedIn: (state: boolean) => set({ isBloggerLoggedIn: state }),
  user: null,
  authLoading: false,
  tokenLoading: true,
  setUser: (args) => set({ user: args }),
  logoutService: () => {
    setSession(null);
    set({ user: null, authLoading: false, tokenLoading: false });
  },
  loginService: async (username, password) => {
    set({ authLoading: true });
    try {
      const res = await axios.post(
        `https://atlo.onrender.com/api/v0/user/login`,
        {
          username,
          password,
        }
      );
      if (res.data.result?.user && res.data.result?.token) {
        setSession(res.data.result?.token);
        set({ user: res.data.result?.user, authLoading: false });
      } else {
        set({ authLoading: false, user: null });
      }
    } catch (err) {
      console.log(err);
      set({ authLoading: false });
    }
  },
  loginWithToken: async () => {
    try {
      const res = await axios.post(
        `https://atlo.onrender.com/api/v0/user/validation`
      );
      if (res.data.result?.user && res.data.result?.token) {
        setSession(res.data.result?.token);
        set({ user: res.data.result?.user, tokenLoading: false });
      } else {
        set({ tokenLoading: false, user: null });
      }
    } catch (err) {
      console.log(err);
      get().logoutService();
    }
  },
}));

export default useAuthStore;
