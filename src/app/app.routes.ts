import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MToggleComponent } from '../app/ui-lib/m-toggle/m-toggle.component';
import { MTextfieldComponent } from '../app/ui-lib/m-textfield/m-textfield.component';

export const routes: Routes = [
  {
    path: 'textfield',
    component: MTextfieldComponent,
  },
  {
    path: 'toggle',
    component: MToggleComponent
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