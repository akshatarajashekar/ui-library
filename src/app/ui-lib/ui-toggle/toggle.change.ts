import { UiToggleComponent } from "./ui-toggle.component";

export class UiToggleChange {
  changeEvent: Event;
  value?: string;
  source: UiToggleComponent;
  constructor(source: UiToggleComponent, changeEvent: Event) {
    this.source = source;
    this.changeEvent = changeEvent;
    this.value = this.value;
  }
}