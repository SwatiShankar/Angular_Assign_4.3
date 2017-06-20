// TestShape.ts 
import shape = require("./iShap"); 
import circle = require("./Circl"); 
import triangle = require("./Triang");  

function drawAllShapes(shapeToDraw: shape.iShap) {
   shapeToDraw.draw(); 
} 

drawAllShapes(new circle.Circl()); 
drawAllShapes(new triangle.Triang()); 