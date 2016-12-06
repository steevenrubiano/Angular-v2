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
    /*toString():string{
        return this.id + "Pelicula: Titulo: " + this.titulo + " Autor:" + this.autor + " Año: " + this.anio;
    }*/

    get getId(): number{
        return this.id;
    } 
    set setId(id: number){
        this.id = id;
    }
    get getTitle(): string{
        return this.titulo;
    } 
    set setTitle(titulo: string){
        this.titulo = titulo;
    }
    get getAutor(): string{
        return this.autor;
    } 
    set setAutor(autor: string){
        this.autor = autor;
    }
    get getAnio(): string{
        return this.anio;
    } 
    set setAnio(anio: string){
        this.anio = anio;
    }
}
