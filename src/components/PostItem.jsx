import { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { useUserById } from "../stores/useUserStore.js";

export function PostItem({ post }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`,
      );
      const data = await res.json();
      setComments(data);
    }

    fetchComments();
  }, []);

  const user = useUserById(post.userId);

  if (!user) return <div>Loading...</div>;

  return (
    <Link to={`/posts/${post.id}`} key={post.id} className="post">
      <h3 className="post-title">{post.title}</h3>
      <h4>Writer: {user.name}</h4>
      {/* <p className="post-description">{post.body.repeat(40)}</p> */}

      <div className="comments-list">
        {comments.slice(0, 2).map((comment) => (
          <div key={comment.id} className="comment">
            <p className="comment-name">{comment.name}</p>
            <p className="comment-email">{comment.email}</p>
            <p className="comment-body">{comment.body}</p>
          </div>
        ))}
      </div>
    </Link>
  );
}
