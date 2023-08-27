import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  vehiculosAlmacenados:any = [];
  indiceVehiculosAlmacenados:number = 0;

  private vehiculosAlmacenados$: BehaviorSubject<number> = new BehaviorSubject<any>(this.vehiculosAlmacenados);
  private indiceVehiculosAlmacenados$: BehaviorSubject<number> = new BehaviorSubject<number>(this.indiceVehiculosAlmacenados);


  getIndiceVehiculosAlmacenados(){
    return this.indiceVehiculosAlmacenados$.asObservable();
  }

  getVehiculosAlmacenados(){
    return this.vehiculosAlmacenados$.asObservable();
  }

  setVhiculosAlmacenados(valor){
    this.vehiculosAlmacenados$.next(valor);
    localStorage.setItem("vehiculosAlmacenados",JSON.stringify(valor));
  }

  setIndiceVhiculosAlmacenados(valor){
    this.indiceVehiculosAlmacenados$.next(valor);
  }

  precargarVehiculosAlmacenados(vehiculoArrayForm:any){
    if (localStorage.getItem('vehiculosAlmacenados')) {
      const _vehiculosAlmacenados = JSON.parse(localStorage.getItem('vehiculosAlmacenados'));
      this.vehiculosAlmacenados$.next(_vehiculosAlmacenados);
    }else{
      let _vehiculosAlmacenados:any = [];
      for (let index = 0; index < vehiculoArrayForm.length; index++) {
        _vehiculosAlmacenados.push({guardado:false});
      }
      this.vehiculosAlmacenados$.next(_vehiculosAlmacenados);
    }
  }

  constructor() { }
}
