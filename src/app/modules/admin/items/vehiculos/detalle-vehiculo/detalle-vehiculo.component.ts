import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle-vehiculo',
  templateUrl: './detalle-vehiculo.component.html',
  styleUrls: ['./detalle-vehiculo.component.scss']
})
export class DetalleVehiculoComponent implements OnInit {

  vehiculoForm = this._formBuilder.group({
    placa     : [, [Validators.required]],
    tipo     : [, [Validators.required]],
    marca     : [, [Validators.required]],
    modelo     : [, [Validators.required]],
    anio     : [, [Validators.required]]
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
