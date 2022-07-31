import React, { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { selectAllPosts , selectPostsStatus , selectPostsError , fetchPosts } from "../redux/features/posts/postsSlice";
import PostsExcerpt from "./PostsExcerpt";


function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(selectPostsStatus);
  const error = useSelector(selectPostsError);

  useEffect(() => {
    if(postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [dispatch , postStatus])
  

  let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts?.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts?.map(post => <PostsExcerpt keys={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

  return (
    <section>
      <h2>posts</h2>
      {content}

    </section>
  );
}

export default PostsList;
