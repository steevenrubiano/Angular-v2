import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-tabla',
  templateUrl: './mostrar-tabla.component.html',
  styleUrls: ['./mostrar-tabla.component.css']
})
export class MostrarTablaComponent implements OnInit {

  listaPeliculas: string[];
  constructor(private servTablas: serv-tabla) { 
    this.listaPeliculas = this.serv-tabla.listaPeliculas;
  }


  /*constructor(private numerosPrimosService: NumerosPrimosService ) { 
      this.listaDeNumeros = this.numerosPrimosService.listaDeNumeros;
    }*/
  ngOnInit() {
  }

}
