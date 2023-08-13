import { Modelo } from "./Indicadores";
import { Propietario } from "./Propietario";

export interface Vehiculo {
    tipo: number;
    placa: string;
    conductor?: string;
    observacionConductor?: string;
    observacion?: string;
    modelo:Modelo;
    propietario: Propietario;
}