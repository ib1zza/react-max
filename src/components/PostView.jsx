import { useState, useEffect } from "react";

export function PostView() {
  const [data, setData] = useState([]);
  const [comments, setComments] = useState({});

  console.log(comments);

  useEffect(() => {
    async function fetchComments(postId) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      );
      const commentsFromServer = await res.json();

      setComments((prev) => ({
        ...prev,
        [postId]: commentsFromServer,
      }));
    }

    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      setData(posts.slice(0, 10));

      posts.slice(0, 10).forEach((post) => fetchComments(post.id));
    }
    fetchPosts();
  }, []);

  return (
    <div className="posts-list">
      {data.map((post) => (
        <div key={post.id} className="post">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-description">{post.body}</p>

          <div className="comments-list">
            {comments[post.id]?.map((comment) => (
              <div key={comment.id} className="comment">
                <p className="comment-name">{comment.name}</p>
                <p className="comment-email">{comment.email}</p>
                <p className="comment-body">{comment.body}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
