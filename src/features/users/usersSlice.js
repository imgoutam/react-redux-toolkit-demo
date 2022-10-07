import { createSlice } from "@reduxjs/toolkit";
//import postLists from './postsList'
const initialState = [
  { id: 1, name: "Goutam" },
  { id: 2, name: "Rajib" }
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
