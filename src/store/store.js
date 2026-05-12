// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import userSlice from "./slices/user.slice.js";
import gameSlice from "./slices/game.slice.js";

const store = configureStore({
  reducer: {
    userSlice,
    gameSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
