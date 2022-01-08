import "./Post.css";

import { PostProvider } from "../types/types"

export interface PostProps {
    data: PostProvider;
   onPostSelect: (post:number) => void;
}

export const Post: React.FC<PostProps> = (props) => {
    return (
        <div className="post" onClick={() => props.onPostSelect(Number(props.data.id))}>

            <h3 className="post-number">{props.data.id}.</h3>
            <p className="post-title">{props.data.title}</p>
        </div>
    )
}