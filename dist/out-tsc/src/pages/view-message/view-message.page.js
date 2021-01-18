import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ViewMessagePage = class ViewMessagePage {
    constructor(data, activatedRoute) {
        this.data = data;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.message = this.data.getMessageById(parseInt(id, 10));
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
    }
};
ViewMessagePage = __decorate([
    Component({
        selector: 'app-view-message',
        templateUrl: './view-message.page.html',
        styleUrls: ['./view-message.page.scss'],
    })
], ViewMessagePage);
export { ViewMessagePage };
//# sourceMappingURL=view-message.page.js.map