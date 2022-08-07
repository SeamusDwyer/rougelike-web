import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../localStorage";

const persistedState = loadState();

const DECK_SIZE = 10;
const STARTING_HEALTH = 10;

const START_GAME_STATE = {
  playerHealth: STARTING_HEALTH,
  selectedCard: null,
  deck: [],
  hand: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    ...{
      ...START_GAME_STATE,
      ...persistedState?.game,
    },
  },
  reducers: {
    setSelectedCard: (state, action) => {
      const { card } = action.payload;
      state.selectedCard = card;
      return state;
    },
    resetGame: () => {
      return START_GAME_STATE;
    },
    generateDeck: (state) => {
      state.isDeckGenerated = true;

      const deck = [];
      for (let i = 0; i < DECK_SIZE; i++) {
        deck.push({
          title: "Scratch",
          description: "Deals 1 damage",
          cost: Math.floor(Math.random() * 9 + 1),
        });
      }

      state.deck = deck;
    },
    dealHand: (state) => {
      const HAND_SIZE = 3;

      for (let i = 0; i < HAND_SIZE && state.deck.length; i++) {
        const card = state.deck.pop();
        state.hand.push(card);
      }
    },
  },
});

export const { setSelectedCard, resetGame, generateDeck, dealHand } =
  gameSlice.actions;
export default gameSlice.reducer;
