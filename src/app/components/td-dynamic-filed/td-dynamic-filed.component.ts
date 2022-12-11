import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicInputComponent } from "../dynamic-field/dynamic-input/dynamic-input.component";
import { REPORT_TYPE } from "../menu/report-config";
import { TdDateComponent } from "./td-date/td-date.component";
import { TdDropdownComponent } from "./td-dropdown/td-dropdown.component";

@Component({
  selector: "app-td-dynamic-filed",
  templateUrl: "./td-dynamic-filed.component.html",
  styleUrls: ["./td-dynamic-filed.component.css"],
})
export class TdDynamicFiledComponent implements AfterViewInit {
  @ViewChild("dynamicInputContainer", { read: ViewContainerRef })
  dynamicInputContainer!: ViewContainerRef;
  @Input() field: any;
  formName: FormGroup;

  supportedDynamicComponents = [
    {
      name: REPORT_TYPE.DATE,
      component: TdDateComponent,
    },
    {
      name: REPORT_TYPE.DROPDOWN,
      component: TdDropdownComponent,
    }
  ];

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }

  private registerDynamicField() {
    this.dynamicInputContainer.clear();
    const componentInstance = this.getComponentByType(this.field.type);
    const dynamicComponent =
      this.dynamicInputContainer.createComponent(componentInstance);
    dynamicComponent.setInput("field", this.field);
    this.cd.detectChanges();
  }

  getComponentByType(type: string): any {
    let componentDynamic = this.supportedDynamicComponents.find(
      (c) => c.name === type
    );
    return componentDynamic.component ;
  }
}
