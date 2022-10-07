// class Stores {
//   __construct() {
//     this.getState();
//   }
//   getState() {
//     console.log("test");
//   }
//   subscribe() {}
// }

// export const store = new Stores();

import { configureStore } from "@reduxjs/toolkit";
import postReducers from "../features/posts/postsSlice";
import userReducers from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postReducers,
    users: userReducers
  }
});
