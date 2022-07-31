import React from 'react'
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";


function PostsExcerpt({post}) {
  return (
    <article>
    <h3>{post.title}</h3>
    <p>{post.body.substring(0, 100)}</p>
    <p className="postCredit">
      <PostAuthor userId={post.userId} />
      <TimeAgo timesTamp={post.date} />
      <ReactionButton post={post} />
    </p>
  </article>
  )
}

export default PostsExcerpt