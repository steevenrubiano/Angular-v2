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
  queCabecera: string;

  constructor(private servTabla: ServTablaService) { 
    this.listaPeliculas = this.servTabla.listaPeliculas;
  }

  sortTable(cabecera: string){
    //TODO: Ordenar filas al hacer click en las cabeceras
    //Toda la informacion en internet, se puede sacar, VAMOS!
    this.queCabecera = cabecera;
        
    if(cabecera=='titulo'){
      
    }
    if(cabecera=='autor'){
      
    }
    if(cabecera=='anio'){
      
    }
  }

  ngOnInit() {
  }

}
