import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewMessagePage } from './view-message.page';
import { IonicModule } from '@ionic/angular';
import { ViewMessagePageRoutingModule } from './view-message-routing.module';
let ViewMessagePageModule = class ViewMessagePageModule {
};
ViewMessagePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ViewMessagePageRoutingModule
        ],
        declarations: [ViewMessagePage]
    })
], ViewMessagePageModule);
export { ViewMessagePageModule };
//# sourceMappingURL=view-message.module.js.map