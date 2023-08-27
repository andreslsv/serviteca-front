import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {

  propietariosAlmacenados = [
    "primero",
    "Segundo",
    "Tercero",
    "Cuarto",
    "primero",
    "Segundo",
    "Tercero",
    "Cuarto"
  ];

  private propietariosAlmacenados$: BehaviorSubject<number> = new BehaviorSubject<any>(this.propietariosAlmacenados);

  getPropietariosAlmacenados(){
    return this.propietariosAlmacenados$.asObservable();
  }

  setPropietariosAlmacenados(valor){
    this.propietariosAlmacenados$.next(valor);
  }

  constructor() { }
}
