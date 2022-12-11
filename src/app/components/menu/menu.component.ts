import { Component, OnDestroy, OnInit } from "@angular/core";
import { MenuItem, MessageService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
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
    public messageService: MessageService
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
    ];
  }

  show(report: REPORT) {
    this.ref = this.dialogService.open(TdDynamicFormComponent, {
      data: {
        model: reportModel[report],
      },
      header: report,
      width: "500px",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1000,
      maximizable: true,
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
