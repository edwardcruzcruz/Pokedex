import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PokecardComponent } from './pokecard.component';
let PokecardComponentModule = class PokecardComponentModule {
};
PokecardComponentModule = __decorate([
    NgModule({
        imports: [CommonModule, FormsModule, IonicModule, RouterModule],
        declarations: [PokecardComponent],
        exports: [PokecardComponent]
    })
], PokecardComponentModule);
export { PokecardComponentModule };
//# sourceMappingURL=pokecard.module.js.map