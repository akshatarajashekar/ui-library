import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiCheckboxComponent } from './ui-lib/ui-checkbox/ui-checkbox.component';
import { UiDropdownComponent } from './ui-lib/ui-dropdown/ui-dropdown.component';
import { UiCardComponent } from './ui-lib/ui-card/ui-card.component';
import { UiModalComponent } from './ui-lib/ui-modal/ui-modal.component';
import { UiTextfieldShowcaseComponent } from './ui-pages/ui-textfield-showcase/ui-textfield-showcase.component';
import { UiToggleShowcaseComponent } from './ui-pages/ui-toggle-showcase/ui-toggle-showcase.component';

export const routes: Routes = [
  {
    path: 'textfield',
    component: UiTextfieldShowcaseComponent,
  },
  {
    path: 'toggle',
    component: UiToggleShowcaseComponent
  },
  {
    path: 'checkbox',
    component: UiCheckboxComponent
  },
  {
    path: 'dropdown',
    component: UiDropdownComponent
  },
  {
    path: 'card',
    component: UiCardComponent
  },
  {
    path: 'modal',
    component: UiModalComponent
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