import { Component, OnInit } from '@angular/core';
import { ServTablaService } from '../serv-tabla.service';

@Component({
  selector: 'app-serv-tabla',
  templateUrl: './serv-tabla.component.html',
  styleUrls: ['./serv-tabla.component.css'],
  providers:[ServTablaService]
})
export class ServTablaComponent implements OnInit {
  
  listaPeliculas: any[];
  constructor(private servTabla: ServTablaService) { 
    this.listaPeliculas = this.servTabla.listaPeliculas;
  }

  filterSort(){
    //TODO: Ordenar filas al haccer click en las cabeceras
    console.log("Funciona");
    console.log(this.listaPeliculas[0].titulo);
    for(let i=0; i<this.listaPeliculas.length; i++){
      
    }
  }

  ngOnInit() {
  }

}
