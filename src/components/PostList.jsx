import { useState, useEffect } from "react";
import { PostItem } from "./PostItem";
import { usePostsStore } from "../stores/usePostsStore";

export function PostList() {
  const postsStore = usePostsStore();

  useEffect(() => {
    postsStore.fetchPosts();
  }, []);

  return (
    <div className="posts-list">
      {postsStore.posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}
