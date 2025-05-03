import { Component, Input, OnInit } from '@angular/core';
import { UiLib } from '../ui-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-lib',
  templateUrl: './ui-lib.component.html',
  styleUrl: './ui-lib.component.scss'
})
export class UiLibComponent implements OnInit{
  @Input() navItem!: UiLib;
  constructor(private router: Router) {
  }
  ngOnInit() {
    console.log(this.navItem, 'navItem')
  }
  btnClick(id: any) {
    console.log('clicked', id)
    this.router.navigate([`/${id}`]);
  }

}
