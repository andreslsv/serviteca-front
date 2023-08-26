import { Component, OnInit } from '@angular/core';
import { PropietariosService } from '../propietarios/propietarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-items',
  templateUrl: './crear-items.component.html',
  styleUrls: ['./crear-items.component.scss']
})
export class CrearItemsComponent implements OnInit {

  propietarioArrayForm = this._formBuilder.array([
    this.crearFormPropietario(),
    this.crearFormPropietario(),
    this.crearFormPropietario(),
    this.crearFormPropietario(),
    this.crearFormPropietario(),
    this.crearFormPropietario(),
    this.crearFormPropietario(),
    this.crearFormPropietario(),
  ]);

  vehiculoArrayForm = this._formBuilder.array([
    this.crearFormVehiculo(),
    this.crearFormVehiculo(),
    this.crearFormVehiculo(),
    this.crearFormVehiculo(),
    this.crearFormVehiculo(),
    this.crearFormVehiculo(),
    this.crearFormVehiculo(),
    this.crearFormVehiculo(),
  ]);

  propietariosAlmacenados: any;
  vehiculosAlmacenados: any;

  getPropietariosAlmacenados() {
    this._propietariosService.getPropietariosAlmacenados().subscribe((data) => {
      this.propietariosAlmacenados = data;
    });
  }

  getVehiculosAlmacenados() {
    this._propietariosService.getPropietariosAlmacenados().subscribe((data) => {
      this.vehiculosAlmacenados = data;
    });
  }

  constructor(private _propietariosService: PropietariosService, private _formBuilder: FormBuilder) { }


  crearFormPropietario(): FormGroup {
    return this._formBuilder.group({
      tipo: [, [Validators.required]],
      nombre: [, [Validators.required]],
      tipoDocumento: [, [Validators.required]],
      correo: [, [Validators.required]],
      documento: [, [Validators.required]],
      telefono: [, [Validators.required]],
      telefono2: [, [Validators.required]],
      departamento: [, [Validators.required]],
      ciudad: [, [Validators.required]],
      anio: [, [Validators.required]]
    });
  }

  crearFormVehiculo(): FormGroup {
    return this._formBuilder.group({
      placa: [, [Validators.required]],
      conductor: [, [Validators.required]],
      tipo: [, [Validators.required]],
      marca: [, [Validators.required]],
      modelo: [, [Validators.required]],
      anio: [, [Validators.required]]
    });
  }


  ngOnInit(): void {
    this.getPropietariosAlmacenados();
    this.getVehiculosAlmacenados();
  }

}
