//name three array methods- .pop() .shift() .concat()

//create an empty array named drinks

var drinks = [];

// add water coffe and tea to the drink array

drinks.push('water', 'coffee', 'tea');

//create a second array named foods
var foods = [];

// add 3 foods

foods.push('apple', 'sandwich', 'chips');


//combine the drinks and food arrays into an array name meals

var meals = drinks.concat(foods);

//reverse and log to console

var meals = meals.reverse();

console.log(meals);
