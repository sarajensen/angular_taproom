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
var FullnessPipe = (function () {
    function FullnessPipe() {
    }
    FullnessPipe.prototype.transform = function (input, desiredFullness) {
        var output = [];
        for (var i = 0; i < input.length; ++i) {
            if (input[i].pints <= 0) {
                console.log("Warning! " + input[i].name + " is empty");
            }
        }
        if (desiredFullness === "almostEmpty") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].pints < 10) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (desiredFullness === "full") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].pints >= 10) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else {
            return input;
        }
    };
    FullnessPipe = __decorate([
        core_1.Pipe({
            name: "fullness",
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FullnessPipe);
    return FullnessPipe;
}());
exports.FullnessPipe = FullnessPipe;
//# sourceMappingURL=fullness.pipe.js.map