import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterCarRoutingModule } from './filter-car-routing.module';
import { FilterCarComponent } from './filter-car.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    FilterCarComponent
  ],
  imports: [
    CommonModule,
    FilterCarRoutingModule,
    MatCardModule,
  ]
})
export class FilterCarModule { }
