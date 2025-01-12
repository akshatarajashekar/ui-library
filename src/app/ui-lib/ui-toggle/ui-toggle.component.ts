import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiToggleChange } from './toggle.change';
@Component({
  selector: 'app-ui-toggle',
  standalone: true,
  imports: [],
  templateUrl: './ui-toggle.component.html',
  styleUrl: './ui-toggle.component.scss'
})
export class UiToggleComponent {
  @Input('label') label = '';
  @Input('value') value = false;
  @Input('disabled') disabled = false;
  @Input('id') id = '';
  @Output('toggleChnage') toggleChnage = new EventEmitter<UiToggleChange>();

  onClick(event: any) {
    this.value = !this.value;
    this.toggleChnage.emit(new UiToggleChange(this, event));
  }
}
