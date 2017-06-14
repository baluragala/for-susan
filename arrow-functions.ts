//Arrow functions =>

//let numbers:Array<number>
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//even numbers

let evenNumbers = numbers.filter(function(n) {
  return n % 2 == 0;
});

let evenNumbers1 = numbers.filter(n => n % 2 == 0);

/*
1. fn with single paramter and single body statement
2. fn with single paramter and multple body statement

3. fn with multiple paramter and single body statement
4. fn with multiple paramter and multple body statement

5. fn with no paramter and single body statement
6. fn with no paramter and multple body statement

*/

let calculateDiscount = (price: number, discountPercent: number): number =>
  price * (discountPercent / 100);

let calculateTotalPrice = (
  price: number,
  taxRate: number,
  discountPercent: number
): number => {
  let taxPrice = price * taxRate / 100;
  let discountedPrice = calculateDiscount(price, discountPercent);
  let totalPrice = price + taxPrice - discountedPrice;
  return totalPrice;
};

console.log(evenNumbers);
console.log(evenNumbers1);

console.log(calculateTotalPrice(200,14.5,20));

let printer = ():void => console.log('printing');

printer()