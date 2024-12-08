import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-textfield',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-textfield.component.html',
  styleUrl: './ui-textfield.component.scss'
})
export class UiTextfieldComponent {
  @Input('id') id = '';
  @Input('label') label = '';
  @Input('value') value = '';
  @Input('hasError') hasError = false;
  @Input('placeholder') placeholder = '';
  @Input('maxLength') maxLength = 25;
  @Input('errorMessage') errorMessage = '';
  @Input('disabled') disabled = false;

  onKeyUp(event: any) {
    console.log(event);
  }
}
