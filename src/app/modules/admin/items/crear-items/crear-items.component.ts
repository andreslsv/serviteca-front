import { Component, OnInit } from '@angular/core';
import { PropietariosService } from '../propietarios/propietarios.service';

@Component({
  selector: 'app-crear-items',
  templateUrl: './crear-items.component.html',
  styleUrls: ['./crear-items.component.scss']
})
export class CrearItemsComponent implements OnInit {

  propietariosAlmacenados: any;

  getPropietariosAlmacenados(){
    this._propietariosService.getPropietariosAlmacenados().subscribe((data)=>{
      this.propietariosAlmacenados=data;
    });
  }

  constructor(private _propietariosService:PropietariosService) { }

  ngOnInit(): void {
    this.getPropietariosAlmacenados();
  }

}
