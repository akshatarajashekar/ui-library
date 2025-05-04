import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-badge.component.html',
  styleUrl: './ui-badge.component.scss'
})
export class UiBadgeComponent {
 @Input('id') id = '';
 @Input('badgetext') badgetext = '';
 @Input('size') size: 'small' | 'medium' | 'large' = 'medium';
 @Input('type') type: 'circle' | 'rectangle' = 'circle';
 @Input('color') color = '#ba1a1a';
}
