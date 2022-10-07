import "./styles.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/postsList";

export default function App() {
  return (
    <main className="App">
      <h1>Redux toolkit</h1>
      <AddPostForm />
      <PostsList />
    </main>
  );
}
