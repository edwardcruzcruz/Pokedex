(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-pokemon-view-pokemon-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/pages/view-pokemon/view-pokemon.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/pages/view-pokemon/view-pokemon.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons left>\n            <ion-back-button [text]=\"getBackButtonText()\" defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-card *ngIf=\"pokemon!=null\">\n        <ion-card-header>\n            <ion-card-title>\n                <div style=\"width: 100%; text-align: center;\">{{pokemon.pokemon_species.name}}</div>\n            </ion-card-title>\n        </ion-card-header>\n        <img *ngIf=\"pokemon.entry_number>0 && pokemon.entry_number<10\" class=\"imagen-tamano\" src=\"assets/imgs/00{{pokemon.entry_number}}.png\" />\n        <img *ngIf=\"pokemon.entry_number>9 && pokemon.entry_number<100\" class=\"imagen-tamano\" src=\"assets/imgs/0{{pokemon.entry_number}}.png\" />\n        <img *ngIf=\"pokemon.entry_number>99\" class=\"imagen-tamano\" src=\"assets/imgs/{{pokemon.entry_number}}.png\" />\n        <ion-card-content>\n            Más detalle en: {{pokemon.pokemon_species.url}}\n        </ion-card-content>\n    </ion-card>\n    <h4 *ngIf=\"pokemon==null\" text-center>El resumen esta vacio</h4>\n</ion-content>");

/***/ }),

/***/ "./src/pages/view-pokemon/view-pokemon-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/pages/view-pokemon/view-pokemon-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ViewPokemonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPokemonPageRoutingModule", function() { return ViewPokemonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_pokemon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-pokemon.page */ "./src/pages/view-pokemon/view-pokemon.page.ts");




const routes = [
    {
        path: '',
        component: _view_pokemon_page__WEBPACK_IMPORTED_MODULE_3__["ViewPokemonPage"]
    }
];
let ViewPokemonPageRoutingModule = class ViewPokemonPageRoutingModule {
};
ViewPokemonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewPokemonPageRoutingModule);



/***/ }),

/***/ "./src/pages/view-pokemon/view-pokemon.module.ts":
/*!*******************************************************!*\
  !*** ./src/pages/view-pokemon/view-pokemon.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewPokemonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPokemonPageModule", function() { return ViewPokemonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_pokemon_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-pokemon-routing.module */ "./src/pages/view-pokemon/view-pokemon-routing.module.ts");
/* harmony import */ var _view_pokemon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-pokemon.page */ "./src/pages/view-pokemon/view-pokemon.page.ts");







let ViewPokemonPageModule = class ViewPokemonPageModule {
};
ViewPokemonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_pokemon_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewPokemonPageRoutingModule"]
        ],
        declarations: [_view_pokemon_page__WEBPACK_IMPORTED_MODULE_6__["ViewPokemonPage"]]
    })
], ViewPokemonPageModule);



/***/ }),

/***/ "./src/pages/view-pokemon/view-pokemon.page.scss":
/*!*******************************************************!*\
  !*** ./src/pages/view-pokemon/view-pokemon.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvdmlldy1wb2tlbW9uL3ZpZXctcG9rZW1vbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/pages/view-pokemon/view-pokemon.page.ts":
/*!*****************************************************!*\
  !*** ./src/pages/view-pokemon/view-pokemon.page.ts ***!
  \*****************************************************/
/*! exports provided: ViewPokemonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPokemonPage", function() { return ViewPokemonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_util_constantes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/util/constantes */ "./src/util/constantes.ts");





let ViewPokemonPage = class ViewPokemonPage {
    constructor(activatedRoute, http) {
        this.activatedRoute = activatedRoute;
        this.http = http;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getPokemonsWeb(id);
        //this.message = this.data.getMessageById(parseInt(id, 10));
    }
    getPokemonsWeb(id) {
        //this.pokemones = new Array<Pokemon_entry>();
        //this.pokemon =new Pokemon_entry();
        this.http.get(src_util_constantes__WEBPACK_IMPORTED_MODULE_4__["constantes"].POKEMONSKENTO_URL).subscribe((response) => {
            //console.log(response['pokemon_entries']);
            response['pokemon_entries'].forEach((child) => {
                if (child.entry_number == id) {
                    let pokemon = {
                        entry_number: child.entry_number,
                        pokemon_species: child.pokemon_species
                    };
                    this.pokemon = pokemon;
                }
            });
            //return pokemones;
        });
        //return pokemones;
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
    }
};
ViewPokemonPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ViewPokemonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-pokemon',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-pokemon.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/pages/view-pokemon/view-pokemon.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-pokemon.page.scss */ "./src/pages/view-pokemon/view-pokemon.page.scss")).default]
    })
], ViewPokemonPage);



/***/ })

}]);
//# sourceMappingURL=pages-view-pokemon-view-pokemon-module-es2015.js.map