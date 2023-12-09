import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCarsComponent } from './components/card-cars/card-cars.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarCarsComponent } from './components/agregar-cars/agregar-cars.component';



@NgModule({
  declarations: [
    CardCarsComponent,

    AgregarCarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  exports:[
    CardCarsComponent,
    AgregarCarsComponent
 
  ]
})
export class CarsModule { }
