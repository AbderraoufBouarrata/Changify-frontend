import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawer";
import currencyReducer from "./currency";
import queryReducer from "./query";

export const store = configureStore({
    reducer: {
        drawer: drawerReducer,
        currency: currencyReducer,
        query: queryReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
