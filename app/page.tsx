"use client";

import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [bookmarks, setBookmarks] = useState<
    { title: string; url: string }[]
  >([]);

  const addBookmark = () => {
    if (!title || !url) return;
    setBookmarks([...bookmarks, { title, url }]);
    setTitle("");
    setUrl("");
  };

  const removeBookmark = (index: number) => {
    setBookmarks(bookmarks.filter((_, i) => i !== index));
  };

  return (
    <main className="container">
      <h1>Smart Bookmark App</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Bookmark Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="Website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={addBookmark}>Add Bookmark</button>
      </div>

      <ul className="list">
        {bookmarks.map((b, i) => (
          <li key={i}>
            <a href={b.url} target="_blank" rel="noopener noreferrer">
              {b.title}
            </a>
            <button onClick={() => removeBookmark(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
