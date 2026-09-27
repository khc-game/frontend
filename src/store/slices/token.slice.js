// libs
import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "tokenSlice",
  initialState: {
    accessToken: localStorage.getItem("accessToken") ?? null,
    refreshToken: localStorage.getItem("refreshToken") ?? null,
  },
  reducers: {
    clearTokens(state) {
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },

    setAccessToken(state, { payload }) {
      state.accessToken = payload;

      if (payload === null) {
        localStorage.removeItem("accessToken");
      } else {
        localStorage.setItem("accessToken", payload);
      }
    },

    setRefreshToken(state, { payload }) {
      state.refreshToken = payload;

      if (payload === null) {
        localStorage.removeItem("refreshToken");
      } else {
        localStorage.setItem("refreshToken", payload);
      }
    },

    setTokens(state, { payload }) {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      localStorage.setItem("accessToken", payload.accessToken);
      localStorage.setItem("refreshToken", payload.refreshToken);
    },
  },
});

export default tokenSlice.reducer;
export const { clearTokens, setAccessToken, setRefreshToken, setTokens } =
  tokenSlice.actions;
