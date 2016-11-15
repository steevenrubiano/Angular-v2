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
    this.listaPeliculas = this.servTabla.misPeliculas;
  }

  sortTable(cabecera: string){
    console.log(cabecera);
    if(cabecera=='titulo'){
      this.listaPeliculas.sort(function (a, b) {
        if (a.titulo > b.titulo) { return 1; }
        if (a.titulo < b.titulo) { return -1; }
        return 0; // a must be equal to b
      });
      console.log(this.listaPeliculas);
    }
  }

  ngOnInit() {
  }

}
