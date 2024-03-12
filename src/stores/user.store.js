import { create } from "zustand";

const userStore = create((set) => ({
  user: null,
  isFetching: true,
  setUser: (user) => set({ user, isFetching: false }),
  setIsFetching: (isFetching) => set({ isFetching }),
}));

export default userStore;
