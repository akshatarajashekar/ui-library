import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiDropdownComponent } from './ui-lib/ui-dropdown/ui-dropdown.component';
import { UiModalComponent } from './ui-lib/ui-modal/ui-modal.component';
import { UiTextfieldShowcaseComponent } from './ui-pages/ui-textfield-showcase/ui-textfield-showcase.component';
import { UiToggleShowcaseComponent } from './ui-pages/ui-toggle-showcase/ui-toggle-showcase.component';
import { UiCheckboxShowcaseComponent } from './ui-pages/ui-checkbox-showcase/ui-checkbox-showcase.component';
import { UiCardShowcaseComponent } from './ui-pages/ui-card-showcase/ui-card-showcase.component';

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
    component: UiCheckboxShowcaseComponent
  },
  {
    path: 'dropdown',
    component: UiDropdownComponent
  },
  {
    path: 'card',
    component: UiCardShowcaseComponent
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