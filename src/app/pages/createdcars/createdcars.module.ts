import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreatedcarsRoutingModule } from './createdcars-routing.module';
import { CreatedcarsComponent } from './createdcars.component';


@NgModule({
  declarations: [
    CreatedcarsComponent
  ],
  imports: [
    CommonModule,
    CreatedcarsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CreatedcarsModule { }
