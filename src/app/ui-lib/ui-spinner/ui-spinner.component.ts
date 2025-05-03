import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-spinner.component.html',
  styleUrl: './ui-spinner.component.scss'
})
export class UiSpinnerComponent {
  @Input('spinnerText') spinnerText = '';
  @Input('size') size: 'small' | 'medium' | 'large' = 'medium';

}
