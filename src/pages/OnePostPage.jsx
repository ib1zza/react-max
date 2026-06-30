import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { usePostsStore } from "../stores/usePostsStore";

export default function OnePostPage() {
  const { postId } = useParams();

  const postsStore = usePostsStore();

  useEffect(() => {
    postsStore.fetchPost(postId);
  }, [postId]);

  const { currentPost: post, currentPostComments: comments } = postsStore;

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-description">{post.body.repeat(40)}</p>

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p className="comment-name">{comment.name}</p>
            <p className="comment-email">{comment.email}</p>
            <p className="comment-body">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
