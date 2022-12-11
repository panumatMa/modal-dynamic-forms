import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormGroupDirective } from "@angular/forms";
import { DynamicFiledSetting } from "../../menu/report-config";
import { DynamicFormUtils } from "../dynamicFormUtils";

@Component({
  selector: "app-td-date",
  templateUrl: "./td-date.component.html",
  styleUrls: ["./td-date.component.scss"],
})
export class TdDateComponent implements OnInit {
  @Input() field: DynamicFiledSetting;
  formGroup: FormGroup;

  subFormGroup: FormGroup;

  isRequire: Boolean;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formGroup = formgroupDirective.control;
  }

  ngOnInit(): void {
    this.subFormGroup = new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    });

    this.isRequire = DynamicFormUtils.getIsRequiredForm(
      this.formGroup,
      this.field.fieldName
    );

    this.subFormGroup.valueChanges.subscribe(value => {
      const dateValue = {
        [`${this.field.fieldName}From`]: value.from,
        [`${this.field.fieldName}To`]: value.to,
      }
      this.formGroup.get(this.field.fieldName).setValue(dateValue);
      if(this.isRequire && (value.from === null || value.to === null)) {
        this.formGroup.get(this.field.fieldName).setErrors({required: true});
      }
    });
  }
}
