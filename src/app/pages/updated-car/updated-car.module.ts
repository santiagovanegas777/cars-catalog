import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatedCarRoutingModule } from './updated-car-routing.module';
import { UpdatedCarComponent } from './updated-car.component';


@NgModule({
  declarations: [
    UpdatedCarComponent
  ],
  imports: [
    CommonModule,
    UpdatedCarRoutingModule
  ]
})
export class UpdatedCarModule { }
