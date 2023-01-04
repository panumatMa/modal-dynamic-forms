import { createActionGroup, props } from "@ngrx/store";

export const DialogActions = createActionGroup({
  source: "Dialog",
  events: {
    // defining an event with payload using the `props` function
    "Set Raw Values": props<{ payload: any }>(),
  },
});
