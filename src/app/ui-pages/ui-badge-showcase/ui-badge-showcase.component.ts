import { Component } from '@angular/core';
import { UiBadgeComponent } from 'app/ui-lib/ui-badge/ui-badge.component';

@Component({
  selector: 'app-ui-badge-showcase',
  standalone: true,
  imports: [UiBadgeComponent],
  templateUrl: './ui-badge-showcase.component.html',
  styleUrl: './ui-badge-showcase.component.scss'
})
export class UiBadgeShowcaseComponent {

}
