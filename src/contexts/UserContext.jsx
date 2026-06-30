import { createContext, useState, useEffect } from "react";

const initialState = {
  users: [],
  getUserById: () => {},
};

export const UserContext = createContext(initialState);

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setUsers(users);
    }
    fetchUsers();
  }, []);

  function getUserById(id) {
    return users.find((user) => user.id === id);
  }

  return <UserContext value={{ users, getUserById }}>{children}</UserContext>;
};
