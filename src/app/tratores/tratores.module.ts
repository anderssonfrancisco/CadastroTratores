import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TratoresRoutingModule } from './tratores-routing.module';
import { TratoresComponent } from './tratores/tratores.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    TratoresComponent
  ],
  imports: [
    CommonModule,
    TratoresRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class TratoresModule { }
