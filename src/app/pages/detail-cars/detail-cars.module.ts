import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/Shared/shared/shared.module';
import { DetailCarsRoutingModule } from './detail-cars-routing.module';

import { DetailCarsComponent } from './detail-cars.component';

@NgModule({
  declarations: [
    DetailCarsComponent
  ],
  imports: [
    CommonModule,
    DetailCarsRoutingModule,
    SharedModule
  ]
})
export class DetailCarsModule { }
