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
var PourBeerComponent = (function () {
    function PourBeerComponent() {
        this.pourBeerSender = new core_1.EventEmitter();
    }
    PourBeerComponent.prototype.pourButtonClicked = function (childKeg) {
        childKeg.pints -= 20;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', keg_model_1.Keg)
    ], PourBeerComponent.prototype, "childKeg", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PourBeerComponent.prototype, "pourBeerSender", void 0);
    PourBeerComponent = __decorate([
        core_1.Component({
            selector: 'pour-beer',
            template: "\n    <button (click)=\"pourButtonClicked(childKeg)\">Pour Beer</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PourBeerComponent);
    return PourBeerComponent;
}());
exports.PourBeerComponent = PourBeerComponent;
//# sourceMappingURL=pour-beer.component.js.map