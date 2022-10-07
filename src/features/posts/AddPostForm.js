import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const save = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postTitle">Post Content:</label>
        <input
          type="text"
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <label htmlFor="postAuthor">Post Author:</label>
        <select
          name="postAuthor"
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value="">Select Author</option>
          {usersOption}
        </select>

        <button type="button" onClick={save} disabled={!canSave}>
          Save
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
