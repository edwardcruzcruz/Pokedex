import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MessageComponent } from './message.component';
let MessageComponentModule = class MessageComponentModule {
};
MessageComponentModule = __decorate([
    NgModule({
        imports: [CommonModule, FormsModule, IonicModule, RouterModule],
        declarations: [MessageComponent],
        exports: [MessageComponent]
    })
], MessageComponentModule);
export { MessageComponentModule };
//# sourceMappingURL=message.module.js.map