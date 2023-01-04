import { createSelector } from "@ngrx/store";
import { AppState } from "../store";

export const selectFeature = (state: AppState) => state.report;

export const selectSaveReportSuccess = createSelector(
  selectFeature,
  (state: any) => state.isSuccess
);