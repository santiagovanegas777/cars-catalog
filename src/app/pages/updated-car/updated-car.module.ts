import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatedCarRoutingModule } from './updated-car-routing.module';
import { UpdatedCarComponent } from './updated-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdatedCarComponent
  ],
  imports: [
    CommonModule,
    UpdatedCarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UpdatedCarModule { }
