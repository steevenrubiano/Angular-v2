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
    toString():string{
        return this.id + "Pelicula: Titulo: " + this.titulo + " Autor:" + this.autor + " Año: " + this.anio;
    }
}
