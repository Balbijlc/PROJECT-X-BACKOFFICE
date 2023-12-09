import { Component, Input, inject } from '@angular/core';
import { Create } from 'src/interface/createvehiculo';
import { CarsServiceService } from './cars-service.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cars } from 'src/interface/cars.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROJECT-X-BACKOFFICE';



  @Input()
  public cars!: Create;
  public Cars : Create[]=[];
  public id!: cars;

  
  private fb            = inject( FormBuilder);
  private CarsService   = inject( CarsServiceService );
 constructor(private http:HttpClient){}

  
  public data: FormGroup = this.fb.group({
    

      brand:['', ],
      plate:['', ],
      name: ['', ],

    
   
  });


 

//El que funciona
createcars(){


  const {name, brand, plate}= this.data.value;

console.log(this.data.value)

   this.CarsService.createUser(name, brand, plate).subscribe() ;

}


getcars (){
  this.CarsService.GetCars().subscribe(cars => {
   this.Cars = cars
  })

  //Manejar lista de vehiculos
}

deletecars (id:string){
  this.CarsService.deleteUser(id).subscribe(() => {
    console.log(`Cars con id ${id} eliminado`)
  });
}

updatecars(id:string){
  
  const body = this.data.value;

  console.log(body)

 this.CarsService.updateCars(body,id).subscribe((updateData)=>{
  console.log("vehiculo", updateData);

  this.getcars();
 })
 
}



}




