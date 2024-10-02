import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterCarRoutingModule } from './filter-car-routing.module';
import { FilterCarComponent } from './filter-car.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    FilterCarComponent
  ],
  imports: [
    CommonModule,
    FilterCarRoutingModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class FilterCarModule { }
