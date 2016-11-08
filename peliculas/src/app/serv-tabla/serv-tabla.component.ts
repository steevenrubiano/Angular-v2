import { Component, OnInit } from '@angular/core';
import { ServTabla } from '../serv-tabla.service';

@Component({
  selector: 'app-serv-tabla',
  templateUrl: './serv-tabla.component.html',
  styleUrls: ['./serv-tabla.component.css'],
  providers:[ServTabla]
})
export class ServTablaComponent implements OnInit {
  
  listaPeliculas: string[];
  constructor(private servTabla: ServTabla) { 
    this.listaPeliculas = this.servTabla.listaPeliculas;
  }

  ngOnInit() {
  }

}
