import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { constantes } from 'src/util/constantes';
let HomePage = class HomePage {
    constructor(data, httpRequest) {
        this.data = data;
        this.httpRequest = httpRequest;
    }
    refresh(ev) {
        setTimeout(() => {
            ev.detail.complete();
        }, 3000);
    }
    getMessages() {
        return this.data.getMessages();
    }
    getPokemons() {
        try {
            this.pokemones = new Array();
            //let token = window.localStorage.getItem("userToken");
            this.httpRequest.get(constantes.POKEMONSKENTO_URL).then((data) => {
                var response = data.json();
                if (response['pokemon_entries'] != undefined) {
                    response['pokemon_entries'].forEach((child) => {
                        let pokemon = {
                            entry_number: child.entry_number,
                            pokemon_species: child.pokemon_species
                        };
                        this.pokemones.push(pokemon);
                    });
                    return response['pokemon_entries'];
                    //loading.dismiss();
                }
                else {
                    //loading.dismiss();
                    if (response["STATUS"] != 'OK') {
                        return null;
                        //this.mostrarMensaje(constantes.ALGO_ANDA_MAL, constantes.INTENTALO_NUEVAMENTE);
                    }
                }
            }, (err) => {
                return null;
                //this.mostrarMensaje(constantes.SIN_CONEXION, constantes.REVISAR_CONEXION);
            });
        }
        catch (err) {
            //loading.dismiss();
            return null;
            //this.mostrarMensaje(constantes.SIN_CONEXION, constantes.REVISAR_CONEXION);
        }
        return null;
    }
};
HomePage = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    })
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map