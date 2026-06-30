import { useEffect, useState } from "react";
import "./App.css";
import { PostsPage } from "./pages/PostsPage.jsx";
import { AlbumsPage } from "./pages/AlbumsPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { Route, Routes } from "react-router";
import OnePostPage from "./pages/OnePostPage.jsx";
import { SomethingPage } from "./pages/SomethingPage.jsx";
import { AnythingPage } from "./pages/AnythingPage.jsx";
import { UsersPage } from "./pages/UsersPage.jsx";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import { useUserStore } from "./stores/useUserStore.js";
import OneUserPage from "./components/OneUserPage.jsx";

function App() {
  // return <PostList />;
  // spa - single page application
  console.log("test");
  const usersStore = useUserStore();

  useEffect(() => {
    usersStore.fetchUsers();
  }, []);

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId" element={<OnePostPage />} />
        <Route path="/users/:userId" element={<OneUserPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/something" element={<SomethingPage />} />
        <Route path="/anything" element={<AnythingPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
