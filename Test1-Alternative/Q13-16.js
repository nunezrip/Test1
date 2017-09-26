// IMPORTANT: Make sure you test every answer in the console to make sure it
// prints what you want it to.

// Question 13
// Write a class named Point2D which stores x and y coordinates.

function Point2d (x,y){
    this.x = x
    this.y = y
}

console.log(Point2d(3,5))

/*class Point2D {
    coordinates (x, y) {
      this.x = x;
      this.y = y;
    }
  }

*/

// Question 14
// Write a class named Rectangle which stores three variables: a Point2D to
// represent the top left of the Rectangle, a width and a height.
// Use ES6 class syntax.

function Rectangle(options ={}) {
    this.top = options.top-left || 0
    this.width = options.width || 0
    this.height = options.left || 0
}

let rect = Rectangle()


// Question 15
// Write an instance method inside the ES6 class named getArea which returns
// the area of the Rectangle.


function Rectangle(options ={}) {
    this.top = options.top || 0,
    this.left = options.left || 0,
    this.width = options.width || 0,
    this.height = options.left || 0,

    this.getArea = function(){
       
    }
}


let rect = Rectangle()


// Question 16
// Write a function named getTotalCoverage which receives an array of Rectangle
// objects, uses map to create an array with their areas, and then uses reduce
// to return the sum of their areas.

const getTotalCoverage = (rectArr) => {

};
