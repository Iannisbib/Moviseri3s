import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  lista: string[];

  constructor() {
    this.inicializar();
   }

  inicializar() {
    this.lista = [
      'El lobo de Wall Street',
      'Star Wars',
      'Interstellar',
      'Friends',
      'How i met your mother',
      'Tarzan',
      'Toy Story',
      'Jessie',
      'Up',
      'Breaking Bad',


    ];
  }

buscar(ev: any) {
  this.inicializar() ;

  const val= ev.target.value;

  if (val && val.trim() !== '' ) {
    this.lista = this.lista.filter((item) => {
      return (item.toLowerCase(). indexOf (val. toLowerCase()) > -1);

        });
    }
  }
}

