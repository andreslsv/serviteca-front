import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.scss']
})
export class ListaVehiculosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'placa', 'conductor', 'observacion', 'modelo', 'propietario', 'acciones'];

  dataVehiculos = [
    {
      id: 1,
      placa: "ABC123",
      conductor: "Andrés Salas",
      telefono: "3118976896",
      observacionConductor: "",
      observacion: "",
      modelo: "AAAAAA",
      propietario: "Andrés Salas"
    },
  ];

  irDetalleVehiculo(data: any) {
    this.router.navigate(['/items/vehiculos/detalle/', data.id]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
