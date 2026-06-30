import { useState, useEffect, useContext } from "react";
import { UserItem } from "./UserItem";
import { useUsers } from "../stores/useUserStore";

export function UsersList() {
  const users = useUsers();

  return (
    <div className="posts-list">
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
}
