import { Injectable } from '@angular/core';

@Injectable()
export class ServTablaService {

  listaPeliculas: any[];
  constructor() { 
    this.listaPeliculas = [
      {
        id:1,
        titulo:"Primera peli",
        autor:"Primer autor",
        anio:"2014"
      },
      {
        id:2,
        titulo:"Segunda peli",
        autor:"Segundo autor",
        anio:"2015"
      },
      {
        id:3,
        titulo:"Tercera peli",
        autor:"Tercer autor",
        anio:"2016"
      },
      {
        id:4,
        titulo:"Cuarta peli",
        autor:"Cuarto autor",
        anio:"2017"
      },
      {
        id:5,
        titulo:"Quinta peli",
        autor:"Quinto autor",
        anio:"2018"
      }
    ];
  }
}