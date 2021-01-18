import { Component } from '@angular/core';
import { DataService, Message } from 'src/providers/services/data.service';
import { Pokemon_species } from 'src/interfaces/IPokemon_species';
import { Pokemon_entry } from 'src/interfaces/IPokemon_entry';
//import { HttpRequestProvider } from 'src/providers/http-request/http-request';
import { constantes } from 'src/util/constantes';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filterTerm: string;
  loading: any = null;
  pokemones : Array<Pokemon_entry>;
  constructor(private data: DataService,
              //private httpRequest: HttpRequestProvider,
              //public loadingCtrl: LoadingController,
              private http: HttpClient
              ) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }
  ngOnInit() {
    /*this.loading = this.loadingCtrl.create({
      message: "Cargando..."
      //content: "Cargando..."
    });*/
    this.getPokemonsWeb();
  }
  getMessages(): Message[] {
    return this.data.getMessages();
  }
  getPokemons(): Pokemon_entry[]{
    return this.pokemones;
  }
  getPokemonsWeb(){
    //this.loading.present();
    this.pokemones = new Array<Pokemon_entry>();
    this.http.get(constantes.POKEMONSKENTO_URL).subscribe((response) => {
      //console.log(response['pokemon_entries']);
      response['pokemon_entries'].forEach((child : any) => {
        let pokemon : Pokemon_entry ={
          entry_number : child.entry_number,
          pokemon_species: child.pokemon_species
        }
        this.pokemones.push(pokemon);
        console.log("Entramosssss------------------------------------>")
        console.log(pokemon);
      });
      //return pokemones;
    });
    //this.loading.dismiss();
    //return pokemones;
  }
  /*getPokemons(): Pokemon_entry[]{
    try{
      this.pokemones = new Array<Pokemon_entry>();
      //let token = window.localStorage.getItem("userToken");
      this.http.get(constantes.POKEMONSKENTO_URL).subscribe((data : any) => {
        var response = data.json();
        if( response['pokemon_entries'] != undefined){
          response['pokemon_entries'].forEach((child : any) => {
            let pokemon : Pokemon_entry ={
              entry_number : child.entry_number,
              pokemon_species: child.pokemon_species
            }
            this.pokemones.push(pokemon);
          });
          console.log(this.pokemones);
          return response['pokemon_entries'];
          //loading.dismiss();
        }else{
          //loading.dismiss();
          if(response["STATUS"] != 'OK'){
            return null;
            //this.mostrarMensaje(constantes.ALGO_ANDA_MAL, constantes.INTENTALO_NUEVAMENTE);
          }
        }
        
      }, (err)=>{
        return null;  
        //this.mostrarMensaje(constantes.SIN_CONEXION, constantes.REVISAR_CONEXION);
        });
      }
      catch(err) {
        //loading.dismiss();
        console.log(err);
        return null;
        //this.mostrarMensaje(constantes.SIN_CONEXION, constantes.REVISAR_CONEXION);
      }
    return null;
  }*/

}
