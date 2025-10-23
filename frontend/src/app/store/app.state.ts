import { GameState } from './game/game.reducer';
import { UIState } from './ui/ui.reducer';

export interface AppState {
  game: GameState;
  ui: UIState;
}
