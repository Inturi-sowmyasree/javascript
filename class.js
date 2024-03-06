
// area and perimeter of a square 
class Square {
    constructor(side) {
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
    perimeter() {
        return 4 * this.side;
    }

}
const square = new Square(5);
console.log(square.area());
console.log(square.perimeter());


// area and perimeter of a rectangle 
class Rectangle{
    constructor(length,width){
        this.length = length;
        this.width = width;
    }
    area(){
        return this.length * this.width;
    }
    perimeter(){
        return 2 * this.length + this.width ;
    }
}
const rectangle = new Rectangle(2,3);
console.log(rectangle.area());
console.log(rectangle.perimeter());

// area and perimeter of a circle 
class Circle {
 constructor(radius){
    this.radius = radius;
 }
 area(){
    return Math.PI*this.radius*this.radius;
 }
 perimeter(){
    return 2 * Math.PI * this.radius;
 }
}
const circle = new Circle(5);
console.log(circle.area());
console.log(circle.perimeter());



