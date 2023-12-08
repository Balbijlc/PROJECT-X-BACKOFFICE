import { Injectable,  Input,  inject, signal,  } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';



import { environments } from 'src/environments/environments';
import { Create } from 'src/interface/createvehiculo';
import { Observable, catchError } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';
import { cars } from 'src/interface/cars.interface';



@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

@Input()
public id!: cars;

  private readonly apiUrl = environments.apiUrl;
  
  
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


  
  GetCars(): Observable<Create[]> {

    const url = `${this.apiUrl}`;

    return this.http.get<Create[]>( url )
       .pipe(
         catchError(error => {
          console.error('Error al ver usuarios', error);
          throw error; 
       })
     )
 
   
  }

  deleteUser(id:string):Observable<void>{

    const url = `${this.apiUrl}/${id}`;
console.log(url)
    return this.http.delete<void>(url)
    .pipe(
      catchError(error => {
        console.error('Error al borrar usuario',error);
        throw error
      })
    )

 
  }



  updateCars(body:Create, id:string): Observable<void>{
 
     const url = `${this.apiUrl}/${id}`;
     console.log(url)

  return this.http.patch<void>(url,body)
    .pipe(
      catchError(error => {
        console.log('error al actualizar', error);
        throw error
      })
    )
    
    
  }







  

}
