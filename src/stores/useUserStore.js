import { create } from "zustand";

const useUserStore = create((set, get) => ({
  users: [],
  fetchUsers: async () => {
    if (get().users.length) return;
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    set({ users });
  },
  clearUsers: () => set({ users: [] }),
}));

const useUserById = (id) =>
  useUserStore((state) => state.users.find((user) => user.id === id));

const useUsers = () => useUserStore((state) => state.users);

export { useUserStore, useUserById, useUsers };
