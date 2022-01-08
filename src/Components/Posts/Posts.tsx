import { Pagination } from "../Pagination/Pagination";

import { Post } from "../Post/Post";

import { PostProvider } from "../types/types";

import "./Posts.css";

interface Props {
  posts: PostProvider[];
  handlePostSelect: (post: number) => void;
}

export const Posts: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="posts">
      <h1>Posts</h1>
      <Pagination
        RenderComponent={Post}
        data={props.posts}
        pageLimit={4}
        dataLimit={7}
        handlePostSelect={props.handlePostSelect}
      />
    </div>
  );
};
