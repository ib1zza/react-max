import React from "react";
import { PostList } from "../components/PostList";
import { Link } from "react-router";

export function HomePage() {
  return (
    <div>
      <h1>homepage</h1>

      <Link to="/posts">Posts</Link>
      <Link to="/albums">Albums</Link>
      <Link to="/something">Something</Link>
      <Link to="/anything">Anything</Link>
      <Link to="/users">Users</Link>

      {/* <Link to="https://portfolio-2025-five-lime.vercel.app/">portfolio</Link> */}
    </div>
  );
}
