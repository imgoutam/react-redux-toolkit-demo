import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: 1,
    title: "Title A",
    content: "Content A",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 1,
      coffee: 0
    }
  },
  {
    id: 2,
    title: "Title B",
    content: "Content B",
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 2,
      coffee: 0
    }
  }
];
// mutate state not happenign here . handled by ember js inside create slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // postAdded(state, action) {
    //   state.push(action.payload);
    // }

    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, user) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            user,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          }
        };
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    }
  }
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
