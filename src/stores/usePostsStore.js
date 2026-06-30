import { create } from "zustand";

const usePostsStore = create((set, get) => ({
  posts: [],
  currentPost: null,
  currentPostComments: [],
  fetchPosts: async () => {
    if (get().posts.length) return;
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    set({ posts });
  },
  fetchPost: async (postId) => {
    async function fetchPost() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      const data = await res.json();
      set({ currentPost: data });
    }

    async function fetchComments() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      );
      const data = await res.json();
      set({ currentPostComments: data });
    }

    fetchPost();
    fetchComments();
  },
  removeAllPosts: () => set({ posts: [] }),
}));

const usePostById = (postId) =>
  usePostsStore((state) => state.posts.find((item) => item.id == postId));

const usePosts = () => usePostsStore((state) => state.posts);

export { usePostsStore, usePostById, usePosts };
