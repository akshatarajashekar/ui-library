import { Component } from '@angular/core';
import { UiCheckboxComponent } from "../../ui-lib/ui-checkbox/ui-checkbox.component";

@Component({
  selector: 'app-ui-checkbox-showcase',
  standalone: true,
  imports: [UiCheckboxComponent],
  templateUrl: './ui-checkbox-showcase.component.html',
  styleUrl: './ui-checkbox-showcase.component.scss'
})
export class UiCheckboxShowcaseComponent {
  checkboxValues = [{id: 'value2', label: 'value 1', selected: false},{id: 'value3', label: 'value 2', selected: false}]
  onCheckboxSelect(event: any) {
    console.log(event)
  }
}
