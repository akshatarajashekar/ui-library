import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.scss'
})
export class UiCardComponent {
  @Input('id') id = '';
  @Input('title') title = '';
  @Input('description') description = '';
  @Input('displayButton') displayButton = false;
  @Input('buttonLabel') buttonLabel = false;
  @Input('readMoreButton') readMoreButton = false;
  @Input('readMoreButtonLink') readMoreButtonLink = '';
}
