import "./SelectedPost.css";

import { Link, useParams } from "react-router-dom";

import { PostProvider } from "../types/types";

interface Props {
  posts: PostProvider[];
}

export const SelectedPost: React.FC<Props> = (props): JSX.Element => {
  const { postNumber } = useParams();
  const selectedPost = props.posts.filter(
    (post) => Number(post.id) === Number(postNumber)
  )[0];

  return (
    <>
      {props.posts.length === 0 ? (
        <div className="undefinedPost">
          <p>Nothing yet!</p>
          <p>Come back later</p>
          <Link to="/">Go back to posts</Link>
        </div>
      ) : (
        <div className="selectedPost">
          <h1>{selectedPost.title}</h1>
          <h3>By user: {selectedPost.userId}</h3>
          <p>{selectedPost.body}</p>
          <Link to="/">Go back to posts</Link>
        </div>
      )}
    </>
  );
};
