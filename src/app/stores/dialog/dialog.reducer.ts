import { createReducer, on } from "@ngrx/store";
import { DialogActions } from "./dialog.actions";

export const initialState = {
  rawValue: null,
  errorMessage: null
};

export const dialogReducer = createReducer(
  initialState,
  on(DialogActions.setRawValuesSuccess, (state, newState) => {
    return {
      ...state,
      rawValue: newState.payload,
    };
  }),
  on(DialogActions.setRawValuesError, (state, newState) => {
    return {
      ...state,
      errorMessage: newState.errorMessage,
    };
  })
);
