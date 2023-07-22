import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../localStorage";
import { v4 } from "uuid";

const START_GAME_STATE = { enemies: {} };
const persistedState = loadState();

type Enemy = {
  id: string;
  name: string;
  health: number;
  maxHealth: number;
};

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
      const enemies: Record<string, Enemy> = {};
      const idA = v4();
      enemies[idA] = { id: idA, name: "Dave", health: 12, maxHealth: 12 };
      const idB = v4();
      enemies[idB] = { id: idB, name: "Paul", health: 5, maxHealth: 5 };
      state.enemies = enemies;
    },
    damageEnemy: (state, action) => {
      const { id, card } = action.payload;
      const enemy = state.enemies[id];
      enemy.health -= card.damage;
    },
  },
});

export const { generateEnemies, damageEnemy } = enemiesSlice.actions;
export default enemiesSlice.reducer;
