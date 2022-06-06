function parseCount(value){
 let numberOfItems=Number.parseInt(value, 10);
 if (numberOfItems !== numberOfItems){
    throw new Error ("Невалидное значение");
 } 
 return numberOfItems;
}
 
function  validateCount(value){
 try {
 return  parseCount(value);
     
 } catch (e) {
 return e;
}
} 

class Triangle {
 constructor(sideOfTriangle1, sideOfTriangle2, sideOfTriangle3){
     this.sideOfTriangle1=sideOfTriangle1;
     this.sideOfTriangle2=sideOfTriangle2;
     this.sideOfTriangle3=sideOfTriangle3;
         
     if ((sideOfTriangle1 > (sideOfTriangle2 + sideOfTriangle3))||(sideOfTriangle2 > (sideOfTriangle1 + sideOfTriangle3))||(sideOfTriangle3 > (sideOfTriangle1 + sideOfTriangle2))){
      throw new Error ("Треугольник с такими сторонами не существует");
     }
    }

   

 getPerimeter() {
     return this.sideOfTriangle1 + this.sideOfTriangle2 + this.sideOfTriangle3;
    }
  
 getArea() {
     let halfPerimeter=this.getPerimeter()/2;
     let square=Math.sqrt(halfPerimeter*(halfPerimeter-this.sideOfTriangle1)*(halfPerimeter-this.sideOfTriangle2)*(halfPerimeter-this.sideOfTriangle3));
     return Math.round(square*1000)/1000;
     }
   
 
 }


function getTriangle(sideOfTriangleA, sideOfTriangleB, sideOfTriangleC){
 try {
     return new Triangle(sideOfTriangleA, sideOfTriangleB, sideOfTriangleC);
     
 } catch (err){
     return fakeTriangle = {
                  
     getPerimeter() {
      return message = "Ошибка! Треугольник не существует"
     },
     getArea() {
      return message = "Ошибка! Треугольник не существует"
     },
 }

}

}




 

