import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteCarsRoutingModule } from './delete-cars-routing.module';
import { DeleteCarsComponent } from './delete-cars.component';


@NgModule({
  declarations: [
    DeleteCarsComponent
  ],
  imports: [
    CommonModule,
    DeleteCarsRoutingModule
  ]
})
export class DeleteCarsModule { }
