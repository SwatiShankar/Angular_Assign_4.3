// Circle.ts 
import shape = require("./iShap"); 
export class Circl implements shape.iShap { 
   public draw() { 
      console.log("Cirlce is drawn (external module)"); 
   } 
} 