import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCarsRoutingModule } from './detail-cars-routing.module';

import { DetailCarsComponent } from './detail-cars.component';
// import { SharedModule } from 'src/app/Shared/shared/shared.module';

import { MatCardModule } from '@angular/material/card';
// import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    DetailCarsComponent
  ],
  imports: [
    CommonModule,
    DetailCarsRoutingModule,
    MatCardModule,
    // MatButtonModule,
    MatIconModule,
    // MatDividerModule,

  ]
})
export class DetailCarsModule { }
