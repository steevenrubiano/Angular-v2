export class Peliculas {
    id: number;
    titulo: string;
    autor: string;
    anio: string;

    constructor(id: number, titulo: string, autor: string, anio: string){
            this.id = id;
            this.titulo = titulo;
            this.autor = autor;
            this.anio = anio;
    }
}
