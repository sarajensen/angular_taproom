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
var core_1 = require("@angular/core");
// <div [class.enterclassname]="condition of childKeg">
// </div>
var KegListComponent = (function () {
    function KegListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.kegList = [];
        this.selectedFullness = "all";
    }
    KegListComponent.prototype.addKeg = function (newKegFromChild) {
        this.kegList.push(newKegFromChild);
    };
    KegListComponent.prototype.onChange = function (optionFromMenu) {
        this.selectedFullness = optionFromMenu;
        console.log(this.selectedFullness);
    };
    KegListComponent.prototype.editButtonHasBeenClicked = function (kegToEdit) {
        this.clickSender.emit(kegToEdit);
    };
    return KegListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], KegListComponent.prototype, "clickSender", void 0);
KegListComponent = __decorate([
    core_1.Component({
        selector: 'keg-list',
        template: "\n  <keg-form (newKegSender)=\"addKeg($event)\"></keg-form>\n  <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n    <option value=\"all\" selected=\"selected\">Show All</option>\n    <option value=\"almostEmpty\">Almost Empty</option>\n    <option value=\"full\">Show Full</option>\n  </select>\n    <div *ngFor=\"let currentKeg of kegList | fullness:selectedFullness\">\n      <div [class.schwagBeer]=\"currentKeg.price < 5\">\n        <h3>{{ currentKeg.name }}</h3>\n        <p>{{ currentKeg.brand }}, {{ currentKeg.style}}, {{ currentKeg.price}}, {{ currentKeg.abv}}, {{currentKeg.pints}}</p>\n        <pour-beer [childKeg]=\"currentKeg\"></pour-beer>\n          <progress class=\"keg-progress-bar\" max=\"124\" [value]=\"currentKeg.pints\">\n          </progress>\n        <button (click)=\"editButtonHasBeenClicked(currentKeg)\">Edit</button>\n      </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], KegListComponent);
exports.KegListComponent = KegListComponent;
//# sourceMappingURL=keg-list.component.js.map