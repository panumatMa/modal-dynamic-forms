import { createSelector } from "@ngrx/store";
import { AppState } from "../store";

export const selectFeature = (state: AppState) => state.dialog;

export const selectDialogValues = createSelector(
  selectFeature,
  (state: any) => state.rawValue
);

export const selectDialogIsError = createSelector(
  selectFeature,
  (state: any) => state.errorMessage
);
