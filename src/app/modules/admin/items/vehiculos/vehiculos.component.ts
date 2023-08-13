import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'placa', 'conductor', 'observacion','modelo', 'propietario', 'acciones'];

  dataVehiculos = [
    {
      id: 1,
      placa:"ABC123",
      conductor:"Andrés Salas",
      telefono:"3118976896",
      observacionConductor:"",
      observacion:"",
      modelo:"AAAAAA",
      propietario:"Andrés Salas"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
