import "./Post.css";

import { PostProvider } from "../types/types"

import { Link } from "react-router-dom";

export interface PostProps {
    data: PostProvider;
}

export const Post: React.FC<PostProps> = (props) => {
    return (
        <Link to={`/post/${props.data.id}`} className="post" >
            <h3 className="post-number">{props.data.id}.</h3>
            <p className="post-title">{props.data.title}</p>
        </Link>
    )
}