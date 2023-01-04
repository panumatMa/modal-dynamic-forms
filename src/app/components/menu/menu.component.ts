import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { MenuItem, MessageService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { filter } from "rxjs";
import { DialogActions } from "src/app/stores/dialog/dialog.actions";
import { selectDialogValues } from "src/app/stores/dialog/dialog.selector";
import { AppState } from "src/app/stores/dialog/store";
import { TdDynamicFormComponent } from "../td-dynamic-form/td-dynamic-form.component";
import { REPORT, reportModel } from "./report-config";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit, OnDestroy {
  items: MenuItem[];

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    private store: Store<AppState>
  ) {}

  ref: DynamicDialogRef;

  ngOnInit() {
    this.items = [
      {
        label: "Report 1",
        icon: "pi pi-fw pi-book",
        command: (_) => this.show(REPORT.REPORT1),
      },
      {
        label: "Report 2",
        icon: "pi pi-fw pi-book",
        command: (_) => this.show(REPORT.REPORT2),
      },
      {
        label: "Report 3",
        icon: "pi pi-fw pi-book",
        command: (_) => this.show(REPORT.REPORT3),
      },
      {
        label: "Report 4",
        icon: "pi pi-fw pi-book",
        command: (_) => this.show(REPORT.REPORT4),
      },
      {
        label: "Report 5",
        icon: "pi pi-fw pi-book",
        command: (_) => this.show(REPORT.REPORT5),
      },
      {
        label: "Report 6",
        icon: "pi pi-fw pi-book",
        command: (_) => this.show(REPORT.REPORT6),
      },
    ];

    this.store
      .select(selectDialogValues)
      .pipe(filter(Boolean))
      .subscribe((values) => {
        console.log("values", values);
      });
  }

  show(report: REPORT) {
    this.ref = this.dialogService.open(TdDynamicFormComponent, {
      data: {
        model: reportModel[report],
        onSubmit: this.submit,
      },
      header: report,
      width: "500px",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1000,
      maximizable: true,
    });

    this.ref.onClose.subscribe(() => {
      this.store.dispatch(DialogActions.setRawValues({ payload: null }));
    });
  }

  submit(data: any) {
    console.log("data", data);
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
