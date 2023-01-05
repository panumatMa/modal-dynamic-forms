import { createPlatform, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReportService {
  constructor() {}

  saveReport(data: any): Observable<any> {
    console.log("save report", data);
    return of({ isSuccess: true });
  }
}
