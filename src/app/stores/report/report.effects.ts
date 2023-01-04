import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs/operators";
import { ReportService } from "src/app/services/report.service";
import { ReportActions } from "./report.actions";

@Injectable()
export class ReportEffects {
  constructor(
    private actions$: Actions,
    private reportService: ReportService
  ) {}

  saveReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReportActions.saveReportRequest),
      switchMap((req) =>
        this.reportService
          .saveReport(req.payload)
          .pipe(map((result) => ReportActions.saveReportResponse(result)))
      )
    )
  );
}
