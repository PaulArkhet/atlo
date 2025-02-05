import { create } from "zustand";

const useAuthStore = create<{
  isBloggerLoggedIn: boolean;
  setIsBloggerLoggedIn: (isLoggedIn: boolean) => void;
}>((set, _) => ({
  isBloggerLoggedIn: false,
  setIsBloggerLoggedIn: (state: boolean) => set({ isBloggerLoggedIn: state }),
}));

export default useAuthStore;
