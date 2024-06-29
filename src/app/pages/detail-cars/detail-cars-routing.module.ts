import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailCarsComponent } from './detail-cars.component';

const routes: Routes = [
  {path: "", component: DetailCarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCarsRoutingModule { }
