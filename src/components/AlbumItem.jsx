import { useEffect, useState } from "react";
import { Link } from "react-router";

export function AlbumItem({ album }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`,
      );
      const data = await res.json();
      setPhotos(data);
    }

    fetchPhotos();
  }, []);

  return (
    <div key={album.id} className="post">
      <h3 className="post-title">{album.title}</h3>

      <div className="comments-list">
        {photos.slice(0, 2).map((photo) => (
          <div key={photo.id} className="comment">
            <p className="comment-name">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
