import { createSlice, current } from "@reduxjs/toolkit";
import { loadState } from "../localStorage";

const START_GAME_STATE = { enemies: {} };
const persistedState = loadState();

export const enemiesSlice = createSlice({
  name: "enemies",
  initialState: {
    ...{
      ...START_GAME_STATE,
      ...persistedState?.enemies,
    },
  },
  reducers: {
    generateEnemies: (state) => {
      const enemies = {};
      enemies["Dave"] = { name: "Dave", health: 12 };
      enemies["Paul"] = { name: "Paul", health: 5 };
      state.enemies = enemies;
    },
    damageEnemy: (state, action) => {
      console.log(action);
      console.log(current(state));
      const { name, card } = action.payload;
      const enemy = state.enemies[name];
      console.log(enemy);

      enemy.health -= 1;
    },
  },
});

export const { generateEnemies, damageEnemy } = enemiesSlice.actions;
export default enemiesSlice.reducer;
