import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice.ts";
import authUserReducer from "./redux/authUserSlice.ts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authUser: authUserReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
