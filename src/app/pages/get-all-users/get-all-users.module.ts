import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetAllUsersRoutingModule } from './get-all-users-routing.module';
import { GetAllUsersComponent } from './get-all-users.component';
import { FilteruserPipe } from './filteruser.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetAllUsersComponent,
    FilteruserPipe
  ],
  imports: [
    CommonModule,
    GetAllUsersRoutingModule,
    FormsModule,
  ]
})
export class GetAllUsersModule { }
