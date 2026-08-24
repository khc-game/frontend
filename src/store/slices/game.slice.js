// libs
import { createSlice } from "@reduxjs/toolkit";

// constants
import changeTypes from "../../constants/changeTypes";

const gameSlice = createSlice({
  name: "gameSlice",

  initialState: initState(),

  reducers: {
    initGame(state, { payload }) {
      state.map = payload.map;
      state.turn = payload.turn;
      state.players = payload.players;
    },

    applyMapChanges(state, { payload }) {
      for (let i = 0; i < payload.length; ++i) {
        const { changeType, data } = payload[i];

        switch (changeType) {
          case changeTypes.DAMAGE: {
            const [toI, toJ, damage] = data;
            state.map[toI][toJ].character.hp -= damage;
            break;
          }

          case changeTypes.HEAL: {
            const [toI, toJ, heal] = data;
            state.map[toI][toJ].character.hp += heal;
            break;
          }

          case changeTypes.MOVE: {
            const [fromI, fromJ, toI, toJ] = data;
            const moveableChar = state.map[fromI][fromJ].character;
            state.map[fromI][fromJ].character = null;
            state.map[toI][toJ].character = moveableChar;
            break;
          }

          case changeTypes.SPAWN_CHARACTER: {
            const [i, j, clonedCharacter] = data;
            state.map[i][j].character = clonedCharacter;
            break;
          }

          case changeTypes.DEAD: {
            const [i, j] = data;
            state.map[i][j].character = null;
            break;
          }

          case changeTypes.TRANSFORM_CHARACTER: {
            const [i, j, newCharacter] = data;
            state.map[i][j].character = newCharacter;
            break;
          }

          default: {
            if (changeTypes[changeType]) {
              console.warn(`[NOT IMPLEMENTED]: ${changeType}`);
            } else {
              console.warn(`[UNDEFINDED TYPE]: ${changeType}`);
            }
          }
        }
      }
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
export const { initGame, applyMapChanges, changeTurn, resetAll } =
  gameSlice.actions;

function initState() {
  return {
    map: null,
    turn: null,
    players: null,
  };
}
