import { UiToggleComponent } from "./ui-toggle.component";

export class UiToggleChange {
  changeEvent: Event;
  value?: boolean;
  source: UiToggleComponent;
  constructor(source: UiToggleComponent, changeEvent: Event, value: boolean) {
    this.source = source;
    this.changeEvent = changeEvent;
    this.value = value;
  }
}