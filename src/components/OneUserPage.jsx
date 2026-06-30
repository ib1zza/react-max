import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function OneUserPage() {
  const { userId } = useParams();

  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      const data = await res.json();
      setUser(data);
    }

    async function fetchTodos() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/todos`,
      );
      const data = await res.json();
      setTodos(data);
    }

    fetchUser();
    fetchTodos();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h3 className="post-title">{user.name}</h3>
      <p className="post-description">{user.email}</p>

      <div className="comments-list">
        {todos.map((todo) => (
          <div key={todo.id} className="comment">
            <span className="comment-name">{todo.title}</span>
            <span className="comment-email">
              {todo.completed ? " выполнено" : " не выполнено"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
