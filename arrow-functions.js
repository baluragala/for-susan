//Arrow functions =>
//let numbers:Array<number>
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//even numbers
var evenNumbers = numbers.filter(function (n) {
    return n % 2 == 0;
});
var evenNumbers1 = numbers.filter(function (n) { return n % 2 == 0; });
/*
1. fn with single paramter and single body statement
2. fn with single paramter and multple body statement

3. fn with multiple paramter and single body statement
4. fn with multiple paramter and multple body statement

5. fn with no paramter and single body statement
6. fn with no paramter and multple body statement

*/
var calculateDiscount = function (price, discountPercent) {
    return price * (discountPercent / 100);
};
var calculateTotalPrice = function (price, taxRate, discountPercent) {
    var taxPrice = price * taxRate / 100;
    var discountedPrice = calculateDiscount(price, discountPercent);
    var totalPrice = price + taxPrice - discountedPrice;
    return totalPrice;
};
console.log(evenNumbers);
console.log(evenNumbers1);
console.log(calculateTotalPrice(200, 14.5, 20));
var printer = function () { return console.log('printing'); };
printer();
