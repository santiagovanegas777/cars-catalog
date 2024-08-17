import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UpdateprofileRoutingModule } from './updateprofile-routing.module';
import { UpdateprofileComponent } from './updateprofile.component';

@NgModule({
  declarations: [
    UpdateprofileComponent
  ],
  imports: [
    CommonModule,
    UpdateprofileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UpdateprofileModule { }
