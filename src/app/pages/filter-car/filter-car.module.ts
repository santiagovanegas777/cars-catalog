import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterCarRoutingModule } from './filter-car-routing.module';
import { FilterCarComponent } from './filter-car.component';


@NgModule({
  declarations: [
    FilterCarComponent
  ],
  imports: [
    CommonModule,
    FilterCarRoutingModule
  ]
})
export class FilterCarModule { }
