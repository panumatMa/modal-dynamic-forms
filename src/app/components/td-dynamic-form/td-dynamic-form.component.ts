import { Component } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { DialogActions } from "src/app/stores/dialog/dialog.actions";
import { AppState } from "src/app/stores/dialog/store";
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

  submit: (data: any) => void;

  errorMessage: string;

  constructor(
    private config: DynamicDialogConfig,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.model = this.config.data.model;
    this.submit = this.config.data.onSubmit;
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
          // case "max":
          //   return this.maxArrayLengthValidator(rules["max"]);
          //add more case for future.
          default:
            return;
        }
      })
      .filter((value) => Boolean(value));
    return validators;
  }

  onExport() {
    this.errorMessage = null;

    if (
      this.dynamicFormGroup.get("store") &&
      this.dynamicFormGroup.get("store")?.value?.length >= 3
    ) {
      this.errorMessage = "ห้ามมากกว่า 3";
      return;
    }
    const payload = this.prepareData(this.dynamicFormGroup.value);
    // this.submit(payload);

    this.store.dispatch(DialogActions.setRawValues({ payload }));
  }

  prepareData(rawValue: Object) {
    return Object.keys(rawValue).reduce((previousValue: any, key: string) => {
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
    }, {});
  }

  get isDisable() {
    return this.dynamicFormGroup?.invalid;
  }

  maxArrayLengthValidator(length: number) {
    return (control: AbstractControl) => {
      const value = (control.value as any[]) || null;
      if (value) {
        return value.length <= length ? null : { maxArrayLength: true };
      }
      return null;
    };
  }
}
