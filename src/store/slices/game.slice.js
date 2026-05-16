// libs
import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "gameSlice",

  initialState: initState(),

  reducers: {
    initGame(state, { payload }) {
      state.map = payload.map;
      state.turn = payload.turn;
      state.players = payload.players;
    },

    changeTurn(state, { payload }) {
      state.turn = payload;
    },

    resetAll(state) {
      const initStates = initState();

      state.map = initStates.map;
      state.turn = initStates.turn;
      state.players = initStates.players;
    },
  },
});

export default gameSlice.reducer;
export const {
  initGame,
  changeTurn,
  resetAll,
} = gameSlice.actions;

function initState() {
  return {
    map: null,
    turn: null,
    players: null,
  };
}
