import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-progressbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-progressbar.component.html',
  styleUrl: './ui-progressbar.component.scss'
})
export class UiProgressbarComponent {
  @Input('value') value = 0;
  @Input('progressWidth') progressWidth = 200;
}
