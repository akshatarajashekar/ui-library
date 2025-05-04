import { Component } from '@angular/core';
import { UiProgressbarComponent } from 'app/ui-lib/ui-progressbar/ui-progressbar.component';

@Component({
  selector: 'app-ui-progressbar-showcase',
  standalone: true,
  imports: [UiProgressbarComponent],
  templateUrl: './ui-progressbar-showcase.component.html',
  styleUrl: './ui-progressbar-showcase.component.scss'
})
export class UiProgressbarShowcaseComponent {
  value = 80;
}
