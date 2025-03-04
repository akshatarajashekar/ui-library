import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCheckboxChange } from './checkbox.change';

@Component({
  selector: 'app-ui-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-checkbox.component.html',
  styleUrl: './ui-checkbox.component.scss'
})
export class UiCheckboxComponent {
  @Input('id') id = '';
  @Input('value') value = '';
  @Input('label') label = '';
  @Input('checked') checked = false; 
  @Input('hasError') hasError = false;
  @Input('placeholder') placeholder = '';
  @Input('maxLength') maxLength = 25;
  @Input('errorMessage') errorMessage = '';
  @Input('disabled') disabled = false;
  @Output('checkboxChange') checkboxChange = new EventEmitter<UiCheckboxChange>();
  @ViewChild('checkboxElement') private checkboxElement: any;


  onCheckboxSelected(event: any ) {
    this.checked = this.checkboxElement.nativeElement.checked;
    this.checkboxChange.emit(new UiCheckboxChange(this, event, this.checked, this.value));
  }
}
