import React from "react";
import { useSelector } from "react-redux";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { selectPostById } from "./postsSlice";
import { Link, useParams } from "react-router-dom";

function SinglePostPage() {
  // retrieve postId
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  console.log(post);
  // console.log("dddd");

  if (!post) {
    return (
      <section>
        <h2>posts not found</h2>
      </section>
    );
  }

  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${post.id}`} >Edit post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
}

export default SinglePostPage;
