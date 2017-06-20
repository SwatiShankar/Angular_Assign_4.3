define(["require", "exports", "./Circl", "./Triang"], function (require, exports, circle, triangle) {
    "use strict";
    exports.__esModule = true;
    function drawAllShapes(shapeToDraw) {
        shapeToDraw.draw();
    }
    drawAllShapes(new circle.Circl());
    drawAllShapes(new triangle.Triang());
});
