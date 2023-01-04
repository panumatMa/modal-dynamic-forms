import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { DialogActions } from "./dialog.actions";

@Injectable()
export class DialogEffects {
  constructor(private actions$: Actions) {}

  checkCriteria$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DialogActions.setRawValues),
      switchMap((values) => {
        const rawValues = values.payload;
        if (rawValues?.store?.length > 3) {
          return of(
            DialogActions.setRawValuesError({ errorMessage: "ห้ามมากกว่า 3" })
          );
        } else {
          return of(
            DialogActions.setRawValuesSuccess({ payload: rawValues })
          ).pipe(
            map(() => DialogActions.setRawValuesError({ errorMessage: null }))
          );
        }
      })
    )
  );
}
