import { Component } from '@angular/core';
import { UiToggleComponent } from 'app/ui-lib/ui-toggle/ui-toggle.component';

@Component({
  selector: 'app-ui-toggle-showcase',
  standalone: true,
  imports: [UiToggleComponent],
  templateUrl: './ui-toggle-showcase.component.html',
  styleUrl: './ui-toggle-showcase.component.scss'
})
export class UiToggleShowcaseComponent {
  toggleOutputValue = true;
  onToggle(event: any) { console.log(event)}
}
