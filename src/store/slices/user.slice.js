// libs
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",

  initialState: {
    user: null,
  },

  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
