import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import {RetablosComponent} from './retablos.component';

const routes: Routes = [
  {
    path: '',
    component: RetablosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetablosPageRoutingModule{}
