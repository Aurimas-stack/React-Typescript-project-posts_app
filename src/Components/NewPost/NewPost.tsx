import "./NewPost.css";

import { Link } from "react-router-dom";

interface Props {
  setNewPostTitle: (e: string) => void;
  setNewPostText: (e: string) => void;
  onNewPost: (e: React.MouseEvent) => void;
}

export const NewPost: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="form-cont">
      <h1>Enter new post</h1>
      <form id="postForm">
        <input
          type="text"
          placeholder="Enter the title..."
          onChange={(e) => props.setNewPostTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter your text here..."
          onChange={(e) => props.setNewPostText(e.target.value)}
        ></textarea>
        <input type="submit" name="Submit Post" onClick={props.onNewPost} />
      </form>
      <Link to="/">Go back to posts</Link>
    </div>
  );
};
