import { createActionGroup, props } from "@ngrx/store";

export const ReportActions = createActionGroup({
  source: "Report",
  events: {
    // defining an event with payload using the `props` function
    "Save Report Request": props<{ payload: any }>(),
    "Save Report Response": props<Boolean>(),
  },
});
