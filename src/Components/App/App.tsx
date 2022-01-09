import React, { useState, useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import { PostProvider } from "../types/types";

import { Posts } from "../Posts/Posts";
import { SelectedPost } from "../SelectedPost/SelectedPost";
import { NewPost } from "../NewPost/NewPost";

export default function App(): JSX.Element {
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostProvider[]>([]);
  const [newPostTitle, setNewPostTitle] = useState<string>("");
  const [newPostText, setNewPostText] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async (): Promise<void> => {
      try {
        const api: string = "https://jsonplaceholder.typicode.com/posts";
        const response: Response = await fetch(api);
        const responseData: PostProvider[] = await response.json();
        setLoading(false);
        setPosts(responseData);
      } catch (error: any) {
        setLoading(false);
        setError(error.toString());
      }
    };
    getPosts();
  }, []);

  const handleNewPost = (e: React.MouseEvent) => {
    e.preventDefault();
    const newPostId = posts.length + 1;
    const newPost: PostProvider = {
      userId: "1",
      id: newPostId.toString(),
      title: newPostTitle,
      body: newPostText,
    };
    setPosts([...posts, newPost]);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Posts posts={posts} error={error} loading={loading} />}
      />
      <Route
        path="/post/:postNumber"
        element={<SelectedPost posts={posts} />}
      />
      <Route
        path="/newpost"
        element={
          <NewPost
            setNewPostTitle={setNewPostTitle}
            setNewPostText={setNewPostText}
            onNewPost={handleNewPost}
          />
        }
      />
    </Routes>
  );
}
