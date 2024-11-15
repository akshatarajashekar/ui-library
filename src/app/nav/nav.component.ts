import { Component, ViewEncapsulation } from '@angular/core';
import { UiLib } from '../ui-lib';
import { UiLibComponent } from '../ui-lib/ui-lib.component';
import { UiLibModule } from '../ui-lib/ui-lib.module';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  standalone: true,
  imports: [UiLibModule, CommonModule],
  styleUrl: './nav.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  selectedObj:UiLib = {
    id: 'textfield',
    name: 'Textfield',
    path: 'textfield',
  };
  housingLocationList: UiLib[] = [
    {
      id: 'textfield',
      name: 'Textfield',
      path: 'textfield',
    },
    {
      id: 'toggle',
      name: 'Toggle',
      path: 'toggle',
    }
  ];

  navClick(item: UiLib) {
    this.selectedObj = item;
  }
}
