"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var keg_model_1 = require('./keg.model');
var EditKeg = (function () {
    function EditKeg() {
        this.doneClickedSender = new core_1.EventEmitter();
    }
    EditKeg.prototype.boomCookedDone = function () {
        this.doneClickedSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', keg_model_1.Keg)
    ], EditKeg.prototype, "childSelectedKeg", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditKeg.prototype, "doneClickedSender", void 0);
    EditKeg = __decorate([
        core_1.Component({
            selector: 'edit-keg',
            template: "\n    <div *ngIf=\"childSelectedKeg\">\n      <h1>Edit Keg</h1>\n      <div>\n        <label>Change name:</label>\n        <input [(ngModel)]=\"childSelectedKeg.name\">\n        <label>Change brand:</label>\n        <input [(ngModel)]=\"childSelectedKeg.brand\">\n        <label>Change style:</label>\n        <input [(ngModel)]=\"childSelectedKeg.style\">\n        <label>Change price:</label>\n        <input [(ngModel)]=\"childSelectedKeg.price\">\n        <label>Change abv:</label>\n        <input [(ngModel)]=\"childSelectedKeg.abv\">\n        <button (click)=\"boomCookedDone()\">Done</button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditKeg);
    return EditKeg;
}());
exports.EditKeg = EditKeg;
//# sourceMappingURL=edit-keg.component.js.map