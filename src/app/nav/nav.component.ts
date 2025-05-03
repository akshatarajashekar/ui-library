import { Component, ViewEncapsulation, OnInit } from '@angular/core';
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
export class NavComponent implements OnInit {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  navSearch = '';

  selectedObj:UiLib = {
    id: 'textfield',
    name: 'Textfield',
    path: 'textfield',
  };
  filterItems: UiLib[] = [];
  navInfoList: UiLib[] = [
    {
      id: 'textfield',
      name: 'Textfield',
      path: 'textfield',
    },
    {
      id: 'toggle',
      name: 'Toggle',
      path: 'toggle',
    },
    {
      id: 'checkbox',
      name: 'Checkbox',
      path: 'checkbox',
    },
    {
      id: 'radio',
      name: 'Radio Button',
      path: 'radio',
    },
    {
      id: 'dropdown',
      name: 'Dropdown',
      path: 'dropdown',
    },
    {
      id: 'card',
      name: 'Card',
      path: 'card',
    },
    {
      id: 'modal',
      name: 'Modal',
      path: 'modal',
    },
    {
      id: 'accordian',
      name: 'Accordian',
      path: 'accordian',
    },
    {
      id: 'table',
      name: 'Table',
      path: 'table',
    },
    {
      id: 'tabs',
      name: 'Tabs',
      path: 'tabs',
    },
    {
      id: 'progressbar',
      name: 'Progress Bar',
      path: 'progressbar',
    },
    {
      id: 'spinner',
      name: 'Spinner',
      path: 'spinner',
    },
    {
      id: 'tooltip',
      name: 'Tooltip',
      path: 'tooltip',
    },
    {
      id: 'badge',
      name: 'Badge',
      path: 'badge',
    },
    
  ];

  navClick(item: UiLib) {
    this.selectedObj = item;
  }
 ngOnInit() {
  this.filterItems = this.navInfoList;
 }
  searchNav(event: any) {
    this.navInfoList = this.filterItems;
    this.navInfoList = this.navInfoList.filter((ele) => ele.name.includes(event.target.value))
    console.log(this.navSearch, 'navSearch', event.target.value)
  }
}
