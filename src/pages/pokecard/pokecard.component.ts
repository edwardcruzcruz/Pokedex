import { Component, OnInit, Input } from '@angular/core';
import { Pokemon_entry } from 'src/interfaces/IPokemon_entry';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss'],
})
export class PokecardComponent implements OnInit {
  @Input() pokemon: Pokemon_entry;

  constructor() { }

  ngOnInit() {}

}
