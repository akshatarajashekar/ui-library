import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiDropdownComponent } from './ui-lib/ui-dropdown/ui-dropdown.component';
import { UiModalComponent } from './ui-lib/ui-modal/ui-modal.component';
import { UiTextfieldShowcaseComponent } from './ui-pages/ui-textfield-showcase/ui-textfield-showcase.component';
import { UiToggleShowcaseComponent } from './ui-pages/ui-toggle-showcase/ui-toggle-showcase.component';
import { UiCheckboxShowcaseComponent } from './ui-pages/ui-checkbox-showcase/ui-checkbox-showcase.component';
import { UiCardShowcaseComponent } from './ui-pages/ui-card-showcase/ui-card-showcase.component';
import { UiBadgeShowcaseComponent } from './ui-pages/ui-badge-showcase/ui-badge-showcase.component';
import { UiSpinnerShowcaseComponent } from './ui-pages/ui-spinner-showcase/ui-spinner-showcase.component';
import { UiTabShowcaseComponent } from './ui-pages/ui-tab-showcase/ui-tab-showcase.component';
import { UiTooltipShowcaseComponent } from './ui-pages/ui-tooltip-showcase/ui-tooltip-showcase.component';
import { UiProgressbarComponent } from './ui-lib/ui-progressbar/ui-progressbar.component';
import { UiTableShowcaseComponent } from './ui-pages/ui-table-showcase/ui-table-showcase.component';
import { UiRadioShowcaseComponent } from './ui-pages/ui-radio-showcase/ui-radio-showcase.component';

export const routes: Routes = [
  {
    path: 'accordian',
    component: UiSpinnerShowcaseComponent
  },
  {
    path: 'badge',
    component: UiBadgeShowcaseComponent
  },
  {
    path: 'checkbox',
    component: UiCheckboxShowcaseComponent
  },
  {
    path: 'card',
    component: UiCardShowcaseComponent
  },
  {
    path: 'dropdown',
    component: UiDropdownComponent
  },
  {
    path: 'modal',
    component: UiModalComponent
  },
  {
    path: 'progressbar',
    component: UiProgressbarComponent
  },
  {
    path: 'radio',
    component: UiRadioShowcaseComponent
  },
  {
    path: 'spinner',
    component: UiSpinnerShowcaseComponent
  },
  {
    path: 'tab',
    component: UiTabShowcaseComponent
  },
  {
    path: 'table',
    component: UiTableShowcaseComponent
  },
  {
    path: 'textfield',
    component: UiTextfieldShowcaseComponent
  },
  {
    path: 'toggle',
    component: UiToggleShowcaseComponent
  },
  {
    path: 'tooltip',
    component: UiTooltipShowcaseComponent
  },
  {
    path: "",
    redirectTo: '/textfield',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }