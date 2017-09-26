// What is printed as a result of the following code? You must show your work
// and explain your thinking or else receive 0 points.

var g = f(10);
console.log( g() );
console.log( g() );
console.log( g() );

function f(start){
  var counter = start;
  return function(){
    counter++;
    return counter;
  }
}
console.log (f());

/* 
Answer: 11,12 and 13. counter starts at 10 and is adding up one each time. 
The anonymous function when called is only returning the counter whis is 
incremented by one 
*/
