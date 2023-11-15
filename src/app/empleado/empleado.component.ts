// Esto implementa una interfaz
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  nombre='Auri';
  apellido='Suárez';
  edad=24;
  // empresa='Mi casa';

  // Creación de la función
  // llamaEmpresa(value:String){

  // }
  
  // Metodo constructor
  constructor(){}

  // Metodo ngOnInit
  ngOnInit(): void {
    
  }
}
