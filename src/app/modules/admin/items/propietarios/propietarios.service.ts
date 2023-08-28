import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {

  indicePropietariosAlmacenados:number = 0;
  propietariosAlmacenados:any = [];

  private propietariosAlmacenados$: BehaviorSubject<number> = new BehaviorSubject<any>(this.propietariosAlmacenados);
  private indicePropietariosAlmacenados$: BehaviorSubject<number> = new BehaviorSubject<number>(this.indicePropietariosAlmacenados);

  getIndicePropietariosAlmacenados(){
    return this.indicePropietariosAlmacenados$.asObservable();
  }

  getPropietariosAlmacenados(){
    return this.propietariosAlmacenados$.asObservable();
  }

  setPropietariosAlmacenados(valor){
    this.propietariosAlmacenados$.next(valor);
    localStorage.setItem("vehiculosAlmacenados",JSON.stringify(valor));
  }

  setIndicePropietariosAlmacenados(valor){
    this.indicePropietariosAlmacenados$.next(valor);
  }

  precargarPropietariosAlmacenados(propietarioArrayForm:any){
    if (localStorage.getItem('propietariosAlmacenados')) {
      const _propietariosAlmacenados = JSON.parse(localStorage.getItem('propietariosAlmacenados'));
      this.propietariosAlmacenados$.next(_propietariosAlmacenados);
    }else{
      let _propietariosAlmacenados:any = [];
      for (let index = 0; index < propietarioArrayForm.length; index++) {
        _propietariosAlmacenados.push({guardado:false});
      }
      this.propietariosAlmacenados$.next(_propietariosAlmacenados);
    }
  }

  constructor() { }
}
