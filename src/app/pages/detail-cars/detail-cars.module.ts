import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCarsRoutingModule } from './detail-cars-routing.module';
import { DetailCarsComponent } from './detail-cars.component';


@NgModule({
  declarations: [
    DetailCarsComponent
  ],
  imports: [
    CommonModule,
    DetailCarsRoutingModule
  ]
})
export class DetailCarsModule { }
