import { createReducer, on } from "@ngrx/store";
import { ReportActions } from "./report.actions";

export const initialState = {
  isSuccess: null,
};

export const reportReducer = createReducer(
  initialState,
  on(ReportActions.saveReportResponse, (state, newState) => {
    return {
      ...state,
      isSuccess: newState.isSuccess,
    };
  })
);
