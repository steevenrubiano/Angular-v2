import { Injectable } from '@angular/core';
import{ Peliculas } from './peliculas';

@Injectable()
export class ServTablaService {

  misPeliculas: Peliculas[];
  constructor() { 
    this.misPeliculas = [
      new Peliculas(1, "Titanic", "Y yo que se", "2016"),
      new Peliculas(2, "Fas and Furious", "Ni idea", "2018"),
      new Peliculas(3, "REC", "A saber", "2012"),
      new Peliculas(4, "American History X", "Pues no lo se", "2025"),
      new Peliculas(5, "Mision Imposible", "Tampoco lo se", "1993")
    ];
  }
}