import { Directive, Input, OnInit, ViewContainerRef } from "@angular/core";
import { FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import {
  DynamicFiledSetting,
  REPORT_TYPE,
} from "../components/menu/report-config";
import { TdDateComponent } from "../components/td-dynamic-filed/td-date/td-date.component";
import { TdDropdownComponent } from "../components/td-dynamic-filed/td-dropdown/td-dropdown.component";
import { TdMultiselectComponent } from "../components/td-dynamic-filed/td-multiselect/td-multiselect.component";

@Directive({
  selector: "[appTdDynamicField]",
})
export class TdDynamicFieldDirective implements OnInit {
  @Input("appTdDynamicField") field: DynamicFiledSetting;
  formName: FormGroup;

  supportedDynamicComponents = [
    {
      name: REPORT_TYPE.DATE,
      component: TdDateComponent,
    },
    {
      name: REPORT_TYPE.DROPDOWN,
      component: TdDropdownComponent,
    },
    {
      name: REPORT_TYPE.MULTISELECT,
      component: TdMultiselectComponent,
    },
  ];

  constructor(
    private vc: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const componentInstance = this.getComponentByType(this.field.type);
    const dynamicComponent = this.vc.createComponent(componentInstance);
    dynamicComponent.setInput("field", this.field);
  }

  getComponentByType(type: string): any {
    let componentDynamic = this.supportedDynamicComponents.find(
      (c) => c.name === type
    );
    return componentDynamic.component;
  }
}
