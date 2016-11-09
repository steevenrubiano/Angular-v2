import { Component, OnInit } from '@angular/core';
import { ServTablaService } from '../serv-tabla.service';

@Component({
  selector: 'app-serv-tabla',
  templateUrl: './serv-tabla.component.html',
  styleUrls: ['./serv-tabla.component.css'],
  providers:[ServTablaService]
})
export class ServTablaComponent implements OnInit {
  
  listaPeliculas: string[];
  constructor(private servTabla: ServTablaService) { 
    this.listaPeliculas = this.servTabla.listaPeliculas;
  }

  ngOnInit() {
  }

}
