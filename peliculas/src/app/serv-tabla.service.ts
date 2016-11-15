import { Injectable } from '@angular/core';

@Injectable()
export class ServTablaService {

  listaPeliculas: any[];
  constructor() { 
    this.listaPeliculas = [
      {id:1, titulo:"Titanic", autor:"Y yo que se", anio:"2016"},
      {id:2, titulo:"Fas and Furious", autor:"Ni idea", anio:"2018"},
      {id:3, titulo:"REC", autor:"A saber", anio:"2012"},
      {id:4, titulo:"American History X", autor:"Pues no lo se", anio:"1925"},
      {id:5, titulo:"Mision Imposible", autor:"Tampoco lo se", anio:"1993"}
    ];
  }
}