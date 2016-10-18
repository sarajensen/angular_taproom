"use strict";
var Keg = (function () {
    function Keg(name, brand, style, price, abv) {
        this.name = name;
        this.brand = brand;
        this.style = style;
        this.price = price;
        this.abv = abv;
        this.pints = 124;
    }
    return Keg;
}());
exports.Keg = Keg;
//# sourceMappingURL=keg.model.js.map