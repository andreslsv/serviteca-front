import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle-propietario',
  templateUrl: './detalle-propietario.component.html',
  styleUrls: ['./detalle-propietario.component.scss']
})
export class DetallePropietarioComponent implements OnInit {

  vehiculoForm = this._formBuilder.group({
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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
