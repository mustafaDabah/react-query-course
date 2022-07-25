import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../redux/features/posts/postsSlice";
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a , b) => b.date.localeCompare(a.data));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timesTamp={post.date} />
        <ReactionButton post={post} />
      </p>
    </article>
  ));

  return (
    <section>
      <h2>posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostsList;
