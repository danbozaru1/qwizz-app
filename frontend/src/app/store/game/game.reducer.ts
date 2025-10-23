import { createReducer } from '@ngrx/store';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface GameState {
  // Game state properties will be added in future stories
}

export const initialGameState: GameState = {};

export const gameReducer = createReducer(initialGameState);
