import { Component, inject } from '@angular/core';
import { Create } from 'src/interface/createvehiculo';
import { CarsServiceService } from './cars-service.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars: Create[]=[]

  title = 'PROJECT-X-BACKOFFICE';
  
  private fb            = inject( FormBuilder);
  private CarsService   = inject( CarsServiceService );
 constructor(private http:HttpClient){

  const VerGet = this.CarsService.GetCars()

  console.log(VerGet)
 }

  
  public data: FormGroup = this.fb.group({
    

      brand:['',   ],
      plate:['', ],
      name: ['', ],

    
   
  });


  loadCars() {
    this.CarsService.GetCars().subscribe((cars) => {
      console.log("paso")
    });
  }
  
 


createUser(){


  const {name, brand, plate}= this.data.value;

console.log(this.data.value)

   this.CarsService.createUser(name, brand, plate).subscribe() ;

}


Get() {
  

  const VerGet = this.CarsService.GetCars()

  console.log(VerGet)
  
}







    
//   ).subscribe(response => {
//     console.log(response, 'Excelente')
//   })

// // console.log(this.myForm.value)
// //     return this.myForm.value
   
// }




  


enviardata(){



  const url = 'http://localhost:4000/api/cars';
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  const data = {
    name: '',
    plate: '',
    brand: '',
  };
  
  this.http.post(url, data, { headers }).subscribe()
   
    
  



}


}
