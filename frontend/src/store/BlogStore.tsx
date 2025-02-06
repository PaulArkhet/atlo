import { create } from "zustand";
import { Blog } from "@/routes/blogger/dashboard";

const useBlogStore = create<{
  currentBlog: Blog | null;
  setCurrentBlog: (blog: Blog) => void;
}>((set, _) => ({
  currentBlog: null,
  setCurrentBlog: (blog: Blog) => set({ currentBlog: blog }),
}));

export default useBlogStore;
