import { Component } from '@angular/core';
import { UiCardComponent } from 'app/ui-lib/ui-card/ui-card.component';

@Component({
  selector: 'app-ui-card-showcase',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './ui-card-showcase.component.html',
  styleUrl: './ui-card-showcase.component.scss'
})
export class UiCardShowcaseComponent {
  cardTitle = 'Title';
  cardDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\
   standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
}
