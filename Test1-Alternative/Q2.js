// Print the word 'potato' to the console by acessing the food array using bracket notation.

var food = [ ['banana', 'lemon', 'strawberry'], ['almond', 'pecan', 'pistachio'], ['carrot', 'potato', 'beet'] ];


let fruits = food.map(function(arrayCell) {
return '${arrayCell[2]}'

})

console.log(fruits.join())