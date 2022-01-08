import "./SelectedPost.css";

import { PostProvider } from "../types/types";

interface Props {
    selectedPost: PostProvider 
}

export const SelectedPost: React.FC<Props> = (props): JSX.Element => {
    return (
        <div>
            <p>{props.selectedPost.userId}</p>
            <p>{props.selectedPost.id}</p>
            <h2>{props.selectedPost.title}</h2>
            <p>{props.selectedPost.body}</p>
        </div>
    )
}