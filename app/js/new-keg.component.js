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
var NewKegComponent = (function () {
    function NewKegComponent() {
        // @Input() childKegList: Keg[];
        this.newKegSender = new core_1.EventEmitter();
    }
    NewKegComponent.prototype.addKegClicked = function (name, brand, style, price, abv) {
        var newKeg = new keg_model_1.Keg(name, brand, style, price, abv);
        this.newKegSender.emit(newKeg);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewKegComponent.prototype, "newKegSender", void 0);
    NewKegComponent = __decorate([
        core_1.Component({
            selector: 'keg-form',
            template: "\n  <h3>Tap dat Keg</h3>\n  <label for=\"name\">Name</label>\n  <input #name>\n  <label for=\"brand\">Brand</label>\n  <input #brand>\n  <label for=\"style\">Style</label>\n  <input #style>\n  <label for=\"price\">Price</label>\n  <input #price>\n  <label for=\"abv\">Alcohol by Volume</label>\n  <input #abv>\n  <button (click)=\"\n    addKegClicked(name.value, brand.value, style.value, price.value, abv.value);\n    name.value = '';\n    brand.value = '';\n    style.value = '';\n    price.value = '';\n    abv.value = '';\n  \">Add Keg</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewKegComponent);
    return NewKegComponent;
}());
exports.NewKegComponent = NewKegComponent;
//# sourceMappingURL=new-keg.component.js.map