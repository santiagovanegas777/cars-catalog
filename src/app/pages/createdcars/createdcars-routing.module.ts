import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedcarsComponent } from './createdcars.component';

const routes: Routes = [
  {path: "", component: CreatedcarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatedcarsRoutingModule { }
