import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterCarComponent } from './filter-car.component';

const routes: Routes = [
  {path:"", component: FilterCarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterCarRoutingModule { }
