import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { DynamicFieldComponent } from "./components/dynamic-field/dynamic-field.component";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { DynamicInputComponent } from "./components/dynamic-field/dynamic-input/dynamic-input.component";
import { DynamicSelectComponent } from "./components/dynamic-field/dynamic-select/dynamic-select.component";
import { DynamicRadioComponent } from "./components/dynamic-field/dynamic-radio/dynamic-radio.component";
import { DynamicCheckboxsComponent } from "./components/dynamic-field/dynamic-checkboxs/dynamic-checkboxs.component";
import { DynamicErrorComponent } from "./components/dynamic-form/dynamic-error/dynamic-error.component";
import { InputTextModule } from "primeng/inputtext";
import { MenuComponent } from "./components/menu/menu.component";
import { MenuModule } from "primeng/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogService, DynamicDialogModule } from "primeng/dynamicdialog";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";

import { TdDynamicFormComponent } from "./components/td-dynamic-form/td-dynamic-form.component";
import { MessageService } from "primeng/api";
import { TdDynamicFiledComponent } from "./components/td-dynamic-filed/td-dynamic-filed.component";
import { TdDateComponent } from "./components/td-dynamic-filed/td-date/td-date.component";
import { CalendarModule } from "primeng/calendar";
import { TdDropdownComponent } from "./components/td-dynamic-filed/td-dropdown/td-dropdown.component";
import { DropdownModule } from "primeng/dropdown";
import { TdDynamicFieldDirective } from "./directive/td-dynamic-field.directive";
import { TdMultiselectComponent } from "./components/td-dynamic-filed/td-multiselect/td-multiselect.component";
import { MultiSelectModule } from "primeng/multiselect";
import { StoreModule } from "@ngrx/store";
import { dialogReducer } from "./stores/dialog/dialog.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from '@ngrx/effects';
import { DialogEffects } from "./stores/dialog/dialog.effects";
import { ReportEffects } from "./stores/report/report.effects";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    BrowserAnimationsModule,
    MenuModule,
    DynamicDialogModule,
    ToastModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule,
    StoreModule.forRoot({ dialog: dialogReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([DialogEffects, ReportEffects])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DynamicFieldComponent,
    DynamicFormComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    DynamicRadioComponent,
    DynamicCheckboxsComponent,
    DynamicErrorComponent,
    MenuComponent,
    TdDynamicFormComponent,
    TdDynamicFiledComponent,
    TdDateComponent,
    TdDropdownComponent,
    TdDynamicFieldDirective,
    TdMultiselectComponent,
  ],
  bootstrap: [AppComponent],
  providers: [DialogService, MessageService],
})
export class AppModule {}
