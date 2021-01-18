import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Pokemon_entry } from 'src/interfaces/IPokemon_entry';
import { constantes } from 'src/util/constantes';

@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.page.html',
  styleUrls: ['./view-pokemon.page.scss'],
})
export class ViewPokemonPage implements OnInit {
  pokemon : Pokemon_entry;
  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPokemonsWeb(id);
    //this.message = this.data.getMessageById(parseInt(id, 10));
  }
  getPokemonsWeb(id){
    //this.pokemones = new Array<Pokemon_entry>();
    //this.pokemon =new Pokemon_entry();
    this.http.get(constantes.POKEMONSKENTO_URL).subscribe((response) => {
      //console.log(response['pokemon_entries']);
      response['pokemon_entries'].forEach((child : any) => {
        if (child.entry_number==id){
          let pokemon : Pokemon_entry ={
            entry_number : child.entry_number,
            pokemon_species: child.pokemon_species
          }
          this.pokemon=pokemon;
        }
      });
      //return pokemones;
    });
    //return pokemones;
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
