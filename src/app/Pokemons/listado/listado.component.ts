import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})

export class ListadoComponent {
  pokemones:Ninja[] = [{nombre: "Goku", color: "Negro"}, {nombre: "Goku SSJ1", color: "Amarillo"}, {nombre: "Goku SSJ2", color: "Amarillo fuerte"}, {nombre: "Goku SSJ3", color: "Amarillo pero largo"}, {nombre: "Goku SSJ4", color: "Rojo con negro"}, {nombre: "Goku SSJ Dios", color: "Rojo"}, {nombre: "Goku SSJ Blue", color: "Azul"}, {nombre: "Goku Ultra instinto", color: "Plateado"},];

  pokemonEliminado:Ninja | undefined;
  borrarPokemon(){
    this.pokemonEliminado = this.pokemones.pop(); //Es iportante el || para que no dé erorr
  }
}

interface Ninja{
  nombre:string,
  color: string,
  //mostarPS:() => void; //No recibe nada pero no entrega nada
}
