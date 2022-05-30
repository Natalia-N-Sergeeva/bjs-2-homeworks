function parseCount(value){
 let numberOfItems=Number.parseInt(value, 10);
 if (numberOfItems !== numberOfItems){
    throw new Error ("Невалидное значение");
 } 
 return numberOfItems;
}
 
function  validateCount(value){
 try {
 return resultOfParsing = parseCount(value);
     
 } catch (e) {
 return e;
}
} 

class Triangle {
 constructor(sideOfTriangle1, sideOfTriangle2, sideOfTriangle3){
     this.sideOfTriangle1=sideOfTriangle1;
     this.sideOfTriangle2=sideOfTriangle2;
     this.sideOfTriangle3=sideOfTriangle3;
    
     if (this.sideOfTriangle1 > (this.sideOfTriangle2 + this.sideOfTriangle3)){;
      throw new Error ("Треугольник с такими сторонами не существует");
     } else if (this.sideOfTriangle2 > (this.sideOfTriangle1 + this.sideOfTriangle3)){
        throw new Error ("Треугольник с такими сторонами не существует");
    } else if (this.sideOfTriangle3 > (this.sideOfTriangle1 + this.sideOfTriangle2)){
        throw new Error ("Треугольник с такими сторонами не существует");
     }
    }

 getPerimeter() {
     return this.perimeter=this.sideOfTriangle1 + this.sideOfTriangle2 + this.sideOfTriangle3;
    }
  
 getArea() {
     let halfPerimeter=(this.sideOfTriangle1 + this.sideOfTriangle2 + this.sideOfTriangle3)/2;
     let square=Math.sqrt(halfPerimeter*(halfPerimeter-this.sideOfTriangle1)*(halfPerimeter-this.sideOfTriangle2)*(halfPerimeter-this.sideOfTriangle3));
     return this.square=Math.round(square*1000)/1000;
     }
   

 }


function getTriangle(sideOfTriangleA, sideOfTriangleB, sideOfTriangleC){
 try {
     return new Triangle(sideOfTriangleA, sideOfTriangleB, sideOfTriangleC);
     
 } catch (err){
    class fakeTriangle{
        constructor(){
            this.message=("Ошибка! Треугольник не существует");
        }
     
     getPerimeter() {
      return this.message;
     }
     getArea() {
      return this.message;
     }
   }
   return new fakeTriangle;
 }
}


 

