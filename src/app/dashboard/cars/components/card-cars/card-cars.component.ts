import { Component, Input, OnInit, inject } from '@angular/core';
import { Create } from 'src/interface/createvehiculo';
import { CarsServiceService } from 'src/app/cars-service.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { cars } from 'src/interface/cars.interface';
import { Location } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'card-cars',
  templateUrl: './card-cars.component.html',
})
export class CardCarsComponent {
  public hasLoaded: boolean = true;
  public destroy: boolean = true;
  public actualizar: boolean = false;
  public lola: boolean = false;
  public showUpdateForm: boolean = false;

  @Input()
  public cars!: Create;
  @Input()
  public Cars: Create[] = [];
  @Input()
  public id!: cars;

  @Input()
  public Carss!: Create;

  // ngOnInit(): void {
  //   if( !this.Carss)throw new Error ('No encontro vehiculo');
  //   console.log(this.ngOnInit)
  // }

  private fb = inject(FormBuilder);
  private CarsService = inject(CarsServiceService);
  constructor(private http: HttpClient) {
    this.getcars();
  }

  public data: FormGroup = this.fb.group({
    brand: [''],
    plate: [''],
    name: [''],
  });

  //El que funciona
  createcars() {
    const { name, brand, plate } = this.data.value;
    console.log(this.data.value);
    this.CarsService.createUser(name, brand, plate).subscribe(() => {
      this.data.reset();
      this.getcars();
    });
  }

  getcars() {
    this.CarsService.GetCars().subscribe((cars) => {
      this.Cars = cars;
    });
    //Manejar lista de vehiculos
  }

  deletecars(id: string) {
    this.CarsService.deleteUser(id).subscribe(() => {
      this.data.reset();
      this.getcars();
    });
  }

  updatecars(id: string) {
    const body = this.data.value;

    console.log(body);

    // this.QuieresActualizar = this.data.value;

    this.CarsService.updateCars(body, id).subscribe((updateData) => {
      console.log('vehiculo', updateData);
      this.data.reset();
      this.getcars();
    });
  }

  QuieresActualizar() {
       this.hasLoaded = false;
       this.destroy = true;
    return;
  }

  // actualiza(){
  //   location.reload();
  // }

  crear() {
    this.lola = true;
    this.hasLoaded = true;
    this.destroy = false;
    this.actualizar = true;
    return;
  }

  devuelta() {
    this.hasLoaded = true;
    this.destroy = true;
    this.actualizar = false;
    return;
  }

  IrAformulario() {}
}
