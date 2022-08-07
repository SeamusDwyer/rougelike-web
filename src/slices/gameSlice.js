import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../localStorage";
import { v4 } from "uuid";

const persistedState = loadState();

const DECK_SIZE = 10;
const STARTING_HEALTH = 10;

const START_GAME_STATE = {
  playerHealth: STARTING_HEALTH,
  selectedCard: null,
  deck: [],
  hand: [],
  grave: [],
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
      console.log(card);
      if (state.selectedCard?.id === card.id) {
        state.selectedCard = null;
      } else {
        state.selectedCard = card;
      }

      return state;
    },
    resetGame: () => {
      return START_GAME_STATE;
    },
    generateDeck: (state) => {
      const deck = [];
      for (let i = 0; i < DECK_SIZE; i++) {
        deck.push({
          id: v4(),
          title: `Card ${i}`,
          description: "Deals 1 damage",
          cost: Math.floor(Math.random() * 9 + 1),
          damage: Math.floor(Math.random() * 9 + 1),
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
    playCard: (state, action) => {
      console.log("Play card");
      const { id } = action.payload;
      for (let i = 0; i < state.hand.length; i++) {
        console.log(state.hand[i]);

        if (state.hand[i].id === id) {
          const card = state.hand.splice(i, 1);
          state.grave.push(card);
          state.selectedCard = null;
          return state;
        }
      }
    },
  },
});

export const { setSelectedCard, resetGame, generateDeck, dealHand, playCard } =
  gameSlice.actions;
export default gameSlice.reducer;
