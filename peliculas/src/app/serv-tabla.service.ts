import { Injectable } from '@angular/core';

@Injectable()
export class ServTablaService {

  listaPeliculas: string[];
  constructor() { 
    this.listaPeliculas = [
      {
        "titulo":"Primera peli",
        "autor":"Primer autor",
        "año":"2016"
      },
      {
        "titulo":"Segunda peli",
        "autor":"Segundo autor",
        "año":"2016"
      },
      {
        "titulo":"Tercera peli",
        "autor":"Tercer autor",
        "año":"2016"
      }
    ]
  }

}
