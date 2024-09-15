import { NgModule } from '@angular/core';


import { CarsRoutingModule } from './cars-routing.module';

import { CarsComponent } from './cars.component';

 import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterrPipe } from './filterr.pipe';

@NgModule({
  declarations: [
    CarsComponent,
    FilterrPipe,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
     MatCardModule,
     FormsModule,


  ]
})
export class CarsModule { }
