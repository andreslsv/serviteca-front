import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/servicios/api.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-lista-propietarios',
  templateUrl: './lista-propietarios.component.html',
  styleUrls: ['./lista-propietarios.component.scss']
})
export class ListaPropietariosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'documento', 'telefono','email', 'tipo', 'direccion', 'ciudad', 'acciones'];
  dataSource = ELEMENT_DATA;

  dataPropietarios = [
    {
      id:1,
      nombre:"Fernando Andrés Salas",
      tipoDocumento:1,
      documento:"1090481240",
      telefono:"3118976896",
      email:"Andres@gmail.com",
      tipo:1,
      direccion:"Cl 6 #4-27 Doña Nidia",
      ciudad:2
    },
    {
      id:2,
      nombre:"Diego Andrés Medina",
      tipoDocumento:1,
      documento:"1589555555",
      telefono:"31155555555",
      email:"Medina@gmail.com",
      tipo:1,
      direccion:"Cl 6 #4-27 Niza",
      ciudad:3
    }
  ];


  irDetallePropietario(data: any) {
    this.router.navigate(['/items/propietarios/detalle/', data.id]);
  }

  constructor(private router: Router,private _apiService:ApiService,) { }

  obtenerValores(){
    this._apiService.getQuery("vehiculo", "").subscribe((data)=>{
      console.log("Este es el valor de la respuesta", data);
    });
  }

  ngOnInit(): void {
    this.obtenerValores();
  }

}
