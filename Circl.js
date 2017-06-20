define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Circl = (function () {
        function Circl() {
        }
        Circl.prototype.draw = function () {
            console.log("Cirlce is drawn (external module)");
        };
        return Circl;
    }());
    exports.Circl = Circl;
});
