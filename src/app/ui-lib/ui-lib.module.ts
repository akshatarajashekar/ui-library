import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { UiLibComponent } from "./ui-lib.component";

@NgModule({
  declarations: [
    UiLibComponent
  ],
  imports: [CommonModule],
  exports: [UiLibComponent]
})
export class UiLibModule { }