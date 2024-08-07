import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatCardModule,
  BrowserAnimationsModule,
  MatSlideToggleModule,
  MatButtonModule

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports:[
    ...materialModules
  ]
})
export class SharedModule {

}
