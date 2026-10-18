// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import gameSlice from "./slices/game.slice.js";
import socketSlice from "./slices/socket.slice.js";
import tokenSlice from "./slices/token.slice.js";
import userSlice from "./slices/user.slice.js";

const store = configureStore({
  reducer: {
    gameSlice,
    socketSlice,
    tokenSlice,
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
