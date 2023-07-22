import { createSlice } from '@reduxjs/toolkit';

export type PhaseState = {
  phase: Phase;
};

const INITIAL_STATE: PhaseState = { phase: Phase.PlayerStartTurn };

export const enum Phase {
  PlayerStartTurn,
  PlayerTurn,
  PlayerEndTurn,
  EnemyStartTurn,
  EnemyTurn,
  EnemyEndTurn,
}

function getNewPhase(phase: Phase): Phase {
  switch (phase) {
    case Phase.PlayerStartTurn:
      return Phase.PlayerTurn;
    case Phase.PlayerTurn:
      return Phase.PlayerEndTurn;
    case Phase.PlayerEndTurn:
      return Phase.EnemyStartTurn;
    case Phase.EnemyStartTurn:
      return Phase.EnemyTurn;
    case Phase.EnemyTurn:
      return Phase.EnemyEndTurn;
    case Phase.EnemyEndTurn:
      return Phase.PlayerStartTurn;
  }
}

export const phaseSlice = createSlice({
  name: 'phase',
  initialState: INITIAL_STATE,
  reducers: {
    nextPhase: (state) => {
      state.phase = getNewPhase(state.phase);
    },
  },
});

export const { nextPhase } = phaseSlice.actions;
export default phaseSlice.reducer;
