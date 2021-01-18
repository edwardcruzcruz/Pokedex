import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewMessagePage } from './view-message.page';
const routes = [
    {
        path: '',
        component: ViewMessagePage
    }
];
let ViewMessagePageRoutingModule = class ViewMessagePageRoutingModule {
};
ViewMessagePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ViewMessagePageRoutingModule);
export { ViewMessagePageRoutingModule };
//# sourceMappingURL=view-message-routing.module.js.map