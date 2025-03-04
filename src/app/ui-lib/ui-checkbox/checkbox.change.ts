import { UiCheckboxComponent } from "./ui-checkbox.component";

export class UiCheckboxChange {
  changeEvent: Event;
  selected?: boolean;
  value?: string;
  source: UiCheckboxComponent;
  constructor(source: UiCheckboxComponent, changeEvent: Event, selected: boolean, value: string) {
    this.source = source;
    this.changeEvent = changeEvent;
    this.selected = selected;
    this.value = value;
  }
}