import { createReducer, on } from "@ngrx/store";
import { DialogActions } from "./dialog.actions";

export const initialState = {
  rawValue: null,
};

export const dialogReducer = createReducer(
  initialState,
  on(DialogActions.setRawValues, (state, newState) => {
    return {
      ...state,
      rawValue: newState.payload,
    };
  })
);
