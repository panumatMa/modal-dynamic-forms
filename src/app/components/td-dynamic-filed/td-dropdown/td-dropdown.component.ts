import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { DynamicFormUtils } from "../dynamicFormUtils";

@Component({
  selector: "app-td-dropdown",
  templateUrl: "./td-dropdown.component.html",
  styleUrls: ["./td-dropdown.component.scss"],
})
export class TdDropdownComponent implements OnInit {
  @Input() field: any;
  formGroup: FormGroup;

  isRequire: Boolean;

  stores = [
    {
      name: "TH0001",
      value: "TH0001",
    },
    {
      name: "TH0002",
      value: "TH0002",
    },
    {
      name: "TH0003",
      value: "TH0003",
    },
  ];

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formGroup = formgroupDirective.control;
  }

  ngOnInit(): void {
    this.isRequire = DynamicFormUtils.getIsRequiredForm(
      this.formGroup,
      this.field.fieldName
    );
  }
}
