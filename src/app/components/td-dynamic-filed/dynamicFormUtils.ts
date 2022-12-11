import { AbstractControl, FormGroup } from "@angular/forms";

export namespace DynamicFormUtils {
  export function getIsRequiredForm(
    form: FormGroup,
    fieldName: string
  ): Boolean {
    try {
      const validator = form.controls[fieldName]?.validator({} as AbstractControl);
      return validator && validator.required;
    } catch (error) {
      return false;
    }
  }
}
