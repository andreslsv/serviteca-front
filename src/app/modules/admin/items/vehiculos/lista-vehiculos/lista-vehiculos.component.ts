import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/servicios/api.service';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.scss']
})
export class ListaVehiculosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'placa', 'conductor', 'observacion', 'modelo', 'propietario', 'acciones'];

  dataVehiculos:any;

  irDetalleVehiculo(data: any) {
    this.router.navigate(['/items/vehiculos/detalle/', data.id]);
  }

  obtenerValores(){
    this._apiService.getQuery("vehiculo", "").subscribe((data)=>{
      this.dataVehiculos = data;
    });
  }

  constructor(private router: Router, private _apiService:ApiService) { }

  ngOnInit(): void {
    this.obtenerValores();
  }

}
