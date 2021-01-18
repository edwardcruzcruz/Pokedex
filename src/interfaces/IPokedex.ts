import { Description } from "./IDescription";
import { Name } from './IName';
import { Pokemon_entry } from './IPokemon_entry';
import { Region } from './IRegion';
import { Version_group } from './IVersion_group';

/**
 * Interface para modelar objetos Pokedex
 */
export interface Pokedex{
    descriptions: Description[],
    id:Number,
    is_main_series: boolean,
    name:string,
    names:Name[],
    pokemon_entries: Pokemon_entry[],
    region: Region,
    version_groups: Version_group[]
}