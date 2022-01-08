import { useState, useEffect } from "react";

import {  Route, Link } from "react-router-dom";

import { PostProvider } from "../types/types";

import { Posts } from "../Posts/Posts";
import { SelectedPost } from "../SelectedPost/SelectedPost";

import "./App.css";

export default function App() {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostProvider[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostProvider | undefined>(
    undefined
  );


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

  const handlePostSelect = (post: number) => {
    const neededPost: PostProvider = posts.filter(
      (findPost) => Number(findPost.id) === post
    )[0];
    setSelectedPost(neededPost);
  };

  return (
      <div className="App">
      {error && <h2>{error}</h2>}
      {loading === true ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Posts posts={posts} handlePostSelect={handlePostSelect} />
          {selectedPost !== undefined && 
            <Route path="/post">
              <SelectedPost selectedPost={selectedPost}/>
            </Route>
            }
        </>
      )}
    </div>    

  );
}
