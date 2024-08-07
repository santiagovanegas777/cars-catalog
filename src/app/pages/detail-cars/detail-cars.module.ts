import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCarsRoutingModule } from './detail-cars-routing.module';
import { DetailCarsComponent } from './detail-cars.component';

import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    DetailCarsComponent
  ],
  imports: [
    CommonModule,
    DetailCarsRoutingModule,
    MatCardModule
  ]
})
export class DetailCarsModule { }
