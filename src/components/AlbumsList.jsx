import { useState, useEffect } from "react";
import { PostItem } from "./PostItem";
import { AlbumItem } from "./AlbumItem";

export function AlbumsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const posts = await res.json();
      setData(posts.slice(0, 10));
    }
    fetchAlbums();
  }, []);

  return (
    <div className="posts-list">
      {data.map((album) => (
        <AlbumItem album={album} key={album.id} />
      ))}
    </div>
  );
}
