import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./postAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  //const posts = useSelector((state) => state.posts);
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date)); // shalow copy

  const renderdPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>
        {post.content}
        <PostAuthor userId={post?.user} />
        <TimeAgo timestamp={post?.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section>
      <div>Post List</div>
      {renderdPosts}
    </section>
  );
};

export default PostsList;
