import { useEffect, useState } from "react";
import { Link } from "react-router";
import { create } from "zustand";

export function UserItem({ user }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/todos`,
      );
      const data = await res.json();
      setTodos(data);
    }
    fetchTodos();
  }, []);


  return (
    <Link to={`/users/${user.id}`} key={user.id} className="post">
      <h3 className="post-title">{user.name}</h3>
      <h3 className="post-title">{user.email}</h3>
      <h3 className="post-title">{user.address.street}</h3>

      <div className="comments-list">
        {todos.slice(0, 2).map((todo) => (
          <div key={todo.id} className="comment">
            <p className="comment-name">{todo.title}</p>
          </div>
        ))}
      </div>
    </Link>
  );
}


