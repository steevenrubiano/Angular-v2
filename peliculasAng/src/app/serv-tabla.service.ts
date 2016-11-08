import { Injectable } from '@angular/core';

@Injectable()
export class ServTablaService {

  listaPeliculas: string[];
  constructor() { 
    this.listaPeliculas = [
      {
        "titulo": "Primera",
        "director": "Primero",
        "año": "Primero"
      },
      {
        "titulo": "Segunda",
        "director": "Segundo",
        "año": "Segundo"
      },
      {
        "titulo": "Tercera",
        "director": "Tercero",
        "año": "Tercero"
      }
    ];
  }
}