define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Triang = (function () {
        function Triang() {
        }
        Triang.prototype.draw = function () {
            console.log("Triangle is drawn (external module)");
        };
        return Triang;
    }());
    exports.Triang = Triang;
});
