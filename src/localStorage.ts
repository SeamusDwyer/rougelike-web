import { EnemyState } from 'slices/enemiesSlice';
import { GameState } from 'slices/gameSlice';
import { PhaseState } from 'slices/phaseSlice';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: EnemyState | GameState | PhaseState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
