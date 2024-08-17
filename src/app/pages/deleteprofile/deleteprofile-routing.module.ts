import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteprofileComponent } from './deleteprofile.component';

const routes: Routes = [
  {path: "", component: DeleteprofileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteprofileRoutingModule { }
