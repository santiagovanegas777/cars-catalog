import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllUsersComponent } from './get-all-users.component';

const routes: Routes = [
  {path:"", component: GetAllUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetAllUsersRoutingModule { }
