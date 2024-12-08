import { UiTextfieldComponent } from "./ui-textfield.component";

export class UiTextfieldChange {
  changeEvent: Event;
  value?: string;
  source: UiTextfieldComponent;
  constructor(source: UiTextfieldComponent, changeEvent: Event) {
    this.source = source;
    this.changeEvent = changeEvent;
    this.value = this.value;
  }
}