import { Component, OnInit } from '@angular/core';
import { ServTablaService } from '../serv-tabla.service';
import{ Peliculas } from '../peliculas';

@Component({
  selector: 'app-serv-tabla',
  templateUrl: './serv-tabla.component.html',
  styleUrls: ['./serv-tabla.component.css'],
  providers:[ServTablaService]
})
export class ServTablaComponent implements OnInit {
  
  listaPeliculas: Peliculas[];
  count: number;
  pelicula: Peliculas;

  constructor(private servTabla: ServTablaService) { 
    this.listaPeliculas = this.servTabla.misPeliculas;
    this.count = 0;
    this.pelicula = new Peliculas(null,null,null,null);
  }

  sortTable(cabecera: string){
    if(this.count%2===0){
        this.listaPeliculas.sort( (a, b)=>{
          if (a[cabecera] > b[cabecera]) { return 1; }
          if (a[cabecera] < b[cabecera]) { return -1; }
          return 0; // a must be equal to b
        });
    }
    else{
        this.listaPeliculas.sort( (a, b)=>{
          if (a[cabecera] < b[cabecera]) { return 1; }
          if (a[cabecera] > b[cabecera]) { return -1; }
          return 0; // a must be equal to b
        });
    }
    this.count ++;
  }

  getPeliculas(): Peliculas[]{
    return this.listaPeliculas;
  }
  getPelicula(id: number): Peliculas{
    return this.listaPeliculas[id];
  }

  selecccionaFila(pelicula: Peliculas){
    this.pelicula = pelicula;
  }

  guardarFormulario(pelicula: Peliculas){
    this.listaPeliculas.push(this.pelicula);
    this.pelicula = new Peliculas(null,null,null,null);
  }

  modificarFormulario(pelicula: Peliculas){
    this.pelicula = new Peliculas(null,null,null,null);
  }

  borrarFormulario(pelicula: Peliculas){
    this.listaPeliculas.splice(this.listaPeliculas.indexOf(pelicula),1);
    this.pelicula = new Peliculas(null,null,null,null);
  }

  ngOnInit() {
  }

}