"use strict";
// an array of numbers for testing purposes
const numbers = [75, 77, 63, 89];
// an array of strings for testing purposes
const strings = ["Detroit", "Madison", "Austin", "Ann Arbor"];
// an array of objects for testing purposes
const objects = [
  {
    brand: "Apple",
    size: 15,
    price: 1600,
    touchscreen: false,
  },
  {
    brand: "Lenovo",
    size: 13,
    price: 1200,
    touchscreen: true,
  },
  {
    brand: "Dell",
    size: 13,
    price: 650,
    touchscreen: false,
  },
];
// add a number to the numbers arr
// delete "Ann Arbor"
// delete the first "Apple" phone (w/o knowledge of index)
let sum = 0;
numbers.forEach((whatever) => {
  sum += whatever;
});
console.log(sum);

let largestNumber = numbers[0];
numbers.forEach((currentNumber) => {
  if (currentNumber > largestNumber) {
    largestNumber = currentNumber;
  }
});
console.log(largestNumber);

const objectsInBudget = objects.filter((object) => {
  return object.price <= 1000;
});
console.log(objectsInBudget);
const numberDivisibleBy5 = numbers.filter((number) => {
  return number % 5 === 0;
});
console.log(numberDivisibleBy5);
const foundLaptop = objects.find((laptop) => {
  return laptop.brand === "Apple";
});
console.log(foundLaptop);

const touchScreenLaptop = objects.find((laptop) => {
  return laptop.touchscreen;
});
console.log(touchScreenLaptop);

const touchScreenIndex = objects.findIndex((laptop) => {
  return laptop.touchscreen;
});
console.log(touchScreenIndex);

//splice
//params
// index: number specifying location
//second param is delete count (optional)
//if not provided remaining elements will be deleted
objects.splice(2, 1);
console.log(objects);

numbers.push(100);
console.log(numbers);

const anyTouchScreenLaptops = (arrayOfLaptops) => {
  return arrayOfLaptops.some((laptop) => {
    return laptop.touchscreen;
  });
};
console.log(anyTouchScreenLaptops);

const newArr = numbers.map((number) => {
  return Math.random();
});
console.log(newArr);
