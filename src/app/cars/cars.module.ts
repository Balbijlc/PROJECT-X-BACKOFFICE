import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCarsComponent } from './components/card-cars/card-cars.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    CardCarsComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardCarsComponent,
    CardListComponent
  ]
})
export class CarsModule { }
