import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCarsRoutingModule } from './list-cars-routing.module';
import { ListCarsComponent } from './list-cars.component';


@NgModule({
  declarations: [
    ListCarsComponent
  ],
  imports: [
    CommonModule,
    ListCarsRoutingModule
  ]
})
export class ListCarsModule { }
