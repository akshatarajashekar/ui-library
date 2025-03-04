import { Component, EventEmitter, Input, Output,ViewChild } from '@angular/core';
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
  @Output('toggleChange') toggleChange = new EventEmitter<UiToggleChange>();
  @ViewChild('toggleElement') private toggleElement: any;

  onClick(event: any) {
    this.value = this.toggleElement.nativeElement.checked;
    this.toggleChange.emit(new UiToggleChange(this, event, this.value));
  }
}
