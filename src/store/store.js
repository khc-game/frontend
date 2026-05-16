// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import gameSlice from "./slices/game.slice.js";
import socketSlice from "./slices/socket.slice.js";

const store = configureStore({
  reducer: {
    gameSlice,
    socketSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
