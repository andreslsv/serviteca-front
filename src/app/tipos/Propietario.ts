import { Ciudad } from "./Ubicacion";

export interface Propietario {
    nombre: string;
    tipoDocumento:number;
    documento: string;
    telefono: string;
    email: string;
    tipo: number;
    direccion: string;
    ciudad: Ciudad;
}