import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatedCarComponent } from './updated-car.component';

const routes: Routes = [
  {path:"", component:UpdatedCarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatedCarRoutingModule { }
