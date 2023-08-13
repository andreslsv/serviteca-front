export interface Pais {
    id: string;
    nombre: string;
}

export interface Region {
    id: string;
    nombre: string;
    idPais: string;
}

export interface Ciudad {
    id: string;
    nombre: string;
    idRegion: string;
}