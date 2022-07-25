import { useDispatch } from "react-redux";
import { reactionsAdded } from "../redux/features/posts/postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}


function ReactionButton({post}) {
    const dispatch = useDispatch();

    const reactionsButtons = Object.entries(reactionEmoji).map(([name , emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => dispatch(reactionsAdded({postId:post.id , reaction:name}))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <div>{reactionsButtons}</div>
    )
}

export default ReactionButton