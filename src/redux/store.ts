import { configureStore } from '@reduxjs/toolkit';
import gameReducer from 'slices/gameSlice';
import enemiesReducer from 'slices/enemiesSlice';
import { saveState } from '../localStorage';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    game: gameReducer,
    enemies: enemiesReducer,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
