import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { Subject } from "rxjs";
import { DynamicFiled, REPORT_TYPE } from "../menu/report-config";

@Component({
  selector: "app-td-dynamic-form",
  templateUrl: "./td-dynamic-form.component.html",
  styleUrls: ["./td-dynamic-form.component.scss"],
})
export class TdDynamicFormComponent {
  dynamicFormGroup: FormGroup;
  fields = [];

  data = {};

  model: DynamicFiled;

  constructor(private config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.model = this.config.data.model;
    this.buildForm();
  }

  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  getFormControlsFields() {
    const formGroupFields = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      const validators = this.addValidator(fieldProps.rules);

      formGroupFields[field] = new FormControl(fieldProps.value, validators);
      this.fields.push({ ...fieldProps, fieldName: field });
    }

    return formGroupFields;
  }

  addValidator(rules) {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules)
      .map((rule) => {
        switch (rule) {
          case "required":
            if (rules["required"] === true) {
              return Validators.required;
            }
          //add more case for future.
          default:
            return;
        }
      })
      .filter((value) => Boolean(value));
    return validators;
  }

  onExport() {
    const payload = this.prepareData(this.dynamicFormGroup.value);
    console.table(payload)
  }

  prepareData(rawValue: Object) {
    return Object.keys(rawValue).reduce(
      (previousValue: any, key: string) => {
        if (this.model[key].type === REPORT_TYPE.DATE) {
          return {
            ...previousValue,
            ...rawValue[key],
          };
        } else {
          return {
            ...previousValue,
            [key]: rawValue[key],
          };
        }
      },
      {}
    );
  }

  get isDisable() {
    return this.dynamicFormGroup?.invalid;
  }
}
