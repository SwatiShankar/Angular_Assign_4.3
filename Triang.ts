// Triangle.ts 
import shape = require("./iShap"); 
export class Triang implements shape.iShap { 
   public draw() { 
      console.log("Triangle is drawn (external module)"); 
   } 
}