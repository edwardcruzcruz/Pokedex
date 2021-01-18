import { Ability } from "./IAbility";

/**
 * Interface para modelar objetos Pokedex
 */
export interface Pokedex{
    ability: Ability,
    slot:Number,
    is_hidden: boolean
}