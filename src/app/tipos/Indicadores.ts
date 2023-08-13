export interface Marca {
    id: number;
    nombre: string;
}

export interface Modelo {
    id: number;
    anio:string;
    idMarca: number;
    nombre: string;
}