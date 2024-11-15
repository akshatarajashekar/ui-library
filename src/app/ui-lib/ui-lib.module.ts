import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MTextfieldComponent } from "./m-textfield/m-textfield.component";
import { MToggleComponent } from "./m-toggle/m-toggle.component";
import { UiLibComponent } from "./ui-lib.component";

@NgModule({
  declarations: [
    MTextfieldComponent,
    MToggleComponent,
    UiLibComponent
  ],
  imports: [CommonModule],
  exports: [UiLibComponent, MTextfieldComponent, MToggleComponent]
})
export class UiLibModule { }