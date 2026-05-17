// libs
import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const socketSlice = createSlice({
  name: "socketSlice",

  initialState: {
    socket: null,
  },

  reducers: {
    connect(state, { payload }) {
      const { onConnect = () => {}, onError = () => {} } = payload;

      if (state.socket !== null) {
        console.warn("Socket is already connected");
        return;
      }

      state.socket = io("http://localhost:5000", {
        // reconnection: false,
      });

      state.socket.on("connect_error", (error) => {
        console.warn("Connection error:", error.message);

        state.socket?.removeAllListeners();
        state.socket?.close();
        state.socket = null;

        onError(error.message);
      });

      state.socket.on("connect", () => {
        onConnect();
      });
    },

    disconnect(state) {
      if (state.socket === null) return;

      state.socket?.removeAllListeners();
      state.socket?.close();
      state.socket = null;
    },

    on(state, { payload }) {
      const { event, listener } = payload;

      if (state.socket === null) {
        console.warn("Socket is not connected", event);
        return;
      }

      state.socket.on(event, listener);
    },

    emit(state, { payload }) {
      const { event, message } = payload;

      if (state.socket === null) {
        console.warn("Socket is not connected", event, message);
        return;
      }

      state.socket.emit(event, message);
    },

    to(state, { payload }) {
      const { userId, data } = payload;

      if (state.socket === null) {
        console.warn("Socket is not connected", userId, data);
        return;
      }

      io.to(userId).emit(data);
    },

    off(state, { payload }) {
      if (state.socket === null) {
        console.warn("Socket is not connected");
        return;
      }

      state.socket.off(payload);
    },
  },
});

export default socketSlice.reducer;
export const { connect, disconnect, emit, on, to, off } = socketSlice.actions;
