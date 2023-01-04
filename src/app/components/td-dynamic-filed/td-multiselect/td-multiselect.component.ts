import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { DynamicFormUtils } from "../dynamicFormUtils";

interface City {
  name: string;
  code: string;
}

@Component({
  selector: "app-td-multiselect",
  templateUrl: "./td-multiselect.component.html",
  styleUrls: ["./td-multiselect.component.css"],
})
export class TdMultiselectComponent implements OnInit {
  cities: City[];

  selectedCities: City[];

  @Input() field: any;
  formGroup: FormGroup;

  isRequire: Boolean;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ];

    this.formGroup = formgroupDirective.control;
  }

  ngOnInit(): void {
    this.isRequire = DynamicFormUtils.getIsRequiredForm(
      this.formGroup,
      this.field.fieldName
    );
  }
}
