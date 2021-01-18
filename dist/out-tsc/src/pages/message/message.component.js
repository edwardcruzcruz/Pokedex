import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MessageComponent = class MessageComponent {
    constructor() { }
    ngOnInit() { }
    isIos() {
        const win = window;
        return win && win.Ionic && win.Ionic.mode === 'ios';
    }
};
__decorate([
    Input()
], MessageComponent.prototype, "message", void 0);
MessageComponent = __decorate([
    Component({
        selector: 'app-message',
        templateUrl: './message.component.html',
        styleUrls: ['./message.component.scss'],
    })
], MessageComponent);
export { MessageComponent };
//# sourceMappingURL=message.component.js.map