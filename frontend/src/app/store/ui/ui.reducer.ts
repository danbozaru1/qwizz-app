import { createReducer, on } from '@ngrx/store';
import { setLoading } from './ui.actions';

export interface UIState {
  loading: boolean;
  error: string | null;
  modalOpen: boolean;
}

export const initialUIState: UIState = {
  loading: false,
  error: null,
  modalOpen: false,
};

export const uiReducer = createReducer(
  initialUIState,
  on(setLoading, (state, { loading }) => ({
    ...state,
    loading,
  }))
);
