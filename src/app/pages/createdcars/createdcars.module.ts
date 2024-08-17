import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedcarsRoutingModule } from './createdcars-routing.module';
import { CreatedcarsComponent } from './createdcars.component';


@NgModule({
  declarations: [
    CreatedcarsComponent
  ],
  imports: [
    CommonModule,
    CreatedcarsRoutingModule
  ]
})
export class CreatedcarsModule { }
