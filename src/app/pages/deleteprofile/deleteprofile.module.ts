import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DeleteprofileRoutingModule } from './deleteprofile-routing.module';
import { DeleteprofileComponent } from './deleteprofile.component';

@NgModule({
  declarations: [
    DeleteprofileComponent
  ],
  imports: [
    CommonModule,
    DeleteprofileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DeleteprofileModule { }
