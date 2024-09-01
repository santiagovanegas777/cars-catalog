import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetAllUsersRoutingModule } from './get-all-users-routing.module';
import { GetAllUsersComponent } from './get-all-users.component';


@NgModule({
  declarations: [
    GetAllUsersComponent
  ],
  imports: [
    CommonModule,
    GetAllUsersRoutingModule
  ]
})
export class GetAllUsersModule { }
