import { Pagination } from "../Pagination/Pagination";

import { Post } from "../Post/Post";

import { Link } from "react-router-dom";

import { PostProvider } from "../types/types";

import "./Posts.css";

interface Props {
  posts: PostProvider[];
  loading: boolean;
  error: string | undefined;
}

export const Posts: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="posts">
      {props.error !== undefined && <h2>{props.error}</h2>}
      {props.loading === true ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="title-btn">
            <h1>Posts</h1>
            <Link to="/newpost">+Add new post</Link>
          </div>
          <Pagination
            RenderComponent={Post}
            data={props.posts}
            pageLimit={4}
            dataLimit={7}
          />
        </>
      )}
    </div>
  );
};
