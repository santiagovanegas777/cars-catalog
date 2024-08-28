import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteCarsComponent } from './delete-cars.component';

const routes: Routes = [
  {path: "", component: DeleteCarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteCarsRoutingModule { }
