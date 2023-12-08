import { Injectable,  inject, signal,  } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';



import { environments } from 'src/environments/environments';
import { Create } from 'src/interface/createvehiculo';
import { Observable, catchError } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {



  private readonly apiUrl: string = 'http://localhost:4000/api/cars';
  
  
  constructor(private http: HttpClient){}

  // Método para realizar una solicitud GET a tu API
  get(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url);
  }


  post(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post(url, data);
  }







  createUser(name:string, brand:string, plate:number): Observable<Create> {

    const body = {brand,plate,name};
    console.log()

    const url = `${this.apiUrl}`;

    return this.http.post<Create>(url, body)
       .pipe(
         catchError(error => {
          console.error('Error al crear usuario', error);
          throw error; // Puedes manejar el error de alguna manera
       })
     )

     
  }


  

  UpdateCars(name:string, brand:string, plate:number): Observable<Create> {

    const body = {brand,plate,name};
    console.log()

    const url = `${this.apiUrl}`;

    return this.http.patch<Create>(url, body)
       .pipe(
         catchError(error => {
          console.error('Error al crear usuario', error);
          throw error; // Puedes manejar el error de alguna manera
       })
     )
   
  }


  
  GetCars() {



    const url = `${this.apiUrl}`;

    return this.http.get<Create>( url )
       .pipe(
         catchError(error => {
          console.error('Error al crear usuario', error);
          throw error; // Puedes manejar el error de alguna manera
       })
     )
   
  }








  

}
