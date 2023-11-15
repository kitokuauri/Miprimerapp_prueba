import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Nuevo objeto de héro
  hero = {
    name: 'Spiderman'
  };

  heroes=[
    {name: 'Spiderman'},
    {name: 'Ironman'},
    {name: 'Catwoman'},
    {name: 'La Bruja Escarlata'},
  ];

    selectedHero:string="";

    // si pusieramos el hero en tipo String, name da error
    selectHero(hero:any):void{
      this.selectedHero = hero.name;
      console.log('Selected Hero:', hero.name);
    }


  title = 'miprimerapp';
  saludo = 'Buenos días';
  // cambiando el valor a false activareemos el botón
  isUnchanged:boolean=true;
}
