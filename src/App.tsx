import React, { useState } from "react";
import "./App.css";
import PostRow from "./components/PostRow";
import Form from "./components/Form";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      task: "1 - ASD",
      date: "2022.03.13.",
    },
  ]);

  const addPost = (task: string, date: string) => {
    setPosts((currentPosts) => {
      const id = currentPosts.length + 1;

      const newPost = {
        id,
        task,
        date,
      };

      return [...currentPosts, newPost];
    });
  };

  return (
    <div>
      {posts.map((post) => (
        <PostRow key={post.id} post={post} />
      ))}
      <Form addPost={addPost} />
    </div>
  );
}

export default App;
