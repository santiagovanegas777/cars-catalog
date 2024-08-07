import { NgModule } from '@angular/core';


import { CarsRoutingModule } from './cars-routing.module';

import { CarsComponent } from './cars.component';

 import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
     MatCardModule,


  ]
})
export class CarsModule { }
