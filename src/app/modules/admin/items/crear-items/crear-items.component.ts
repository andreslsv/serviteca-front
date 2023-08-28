import { Component, OnInit } from '@angular/core';
import { PropietariosService } from '../propietarios/propietarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculosService } from '../vehiculos/vehiculos.service';
import { ApiService } from 'app/servicios/api.service';

@Component({
  selector: 'app-crear-items',
  templateUrl: './crear-items.component.html',
  styleUrls: ['./crear-items.component.scss']
})
export class CrearItemsComponent implements OnInit {
  indiceVehiculosAlmacenados: number;
  propietariosAlmacenados: any;
  vehiculosAlmacenados: any;

  quitarVehiculoAlmacenado(){
    this.vehiculosAlmacenados[this.indiceVehiculosAlmacenados]={guardado:false};
    this._vehiculosService.setVhiculosAlmacenados(this.vehiculosAlmacenados);
  }

  guardarVehiculo() {
    this._apiService.postQuery("vehiculo","",this.vehiculoArrayForm.value[this.indiceVehiculosAlmacenados]).subscribe((data)=>{
      //this.vehiculosAlmacenados[this.indiceVehiculosAlmacenados]=this.vehiculoArrayForm.value[this.indiceVehiculosAlmacenados];
      this.vehiculosAlmacenados[this.indiceVehiculosAlmacenados]=data;
      this.vehiculosAlmacenados[this.indiceVehiculosAlmacenados].guardado=true;
      this._vehiculosService.setVhiculosAlmacenados(this.vehiculosAlmacenados);
    });
  }

  cambioTabVehiculo(event: any) {
    const selectedIndex = event.index;
    this._vehiculosService.setIndiceVhiculosAlmacenados(selectedIndex);
  }

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

  getPropietariosAlmacenados() {
    this._propietariosService.getPropietariosAlmacenados().subscribe((data) => {
      this.propietariosAlmacenados = data;
      console.log("Estos son los propietarios almacenados", this.propietariosAlmacenados);
    });
  }

  getVehiculosAlmacenados() {
    this._vehiculosService.getVehiculosAlmacenados().subscribe((data) => {
      this.vehiculosAlmacenados = data;
      console.log("Estos son los vehículos almacenados", this.vehiculosAlmacenados);
    });
  }

  getIndiceVehiculosAlmacenados() {
    this._vehiculosService.getIndiceVehiculosAlmacenados().subscribe((data) => {
      this.indiceVehiculosAlmacenados = data;
      this.getVehiculosAlmacenados();
    });
  }

  constructor(
    private _propietariosService: PropietariosService,
    private _vehiculosService: VehiculosService,
    private _formBuilder: FormBuilder,
    private _apiService: ApiService
    ) { }


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
      modeloId: [, [Validators.required]],
      anio: [, [Validators.required]],
      propietarioId: [, [Validators.required]],
      descripcion: [, [Validators.required]]
    });
  }


  ngOnInit(): void {
    this.getPropietariosAlmacenados();
    this.getIndiceVehiculosAlmacenados();
    this._vehiculosService.precargarVehiculosAlmacenados(this.vehiculoArrayForm);
  }

}
