function calculateDiscount(price, discountPercent) {
    return (price * (discountPercent / 100));
}
var price = 150;
var discountPercent = 10;
var discountPriceValue = calculateDiscount(price, discountPercent);
console.log(discountPriceValue);
// default params
function calculateDiscount1(price, discountPercent) {
    if (discountPercent === void 0) { discountPercent = 10; }
    return (price * (discountPercent / 100));
}
var price1 = 100;
var discountPercent1 = 20;
var discountPriceValue1 = calculateDiscount1(price1);
console.log(discountPriceValue1);
// optional params
function calculateDiscount2(price, discountPercent, staffDiscount) {
    if (discountPercent === void 0) { discountPercent = 10; }
    if (staffDiscount) {
        return (price * ((discountPercent + staffDiscount) / 100));
    }
    else
        return (price * (discountPercent / 100));
}
var price2 = 100;
var discountPercent2 = 20;
var discountPriceValue2 = calculateDiscount2(200, 13);
console.log(discountPriceValue2);
function saveCourse(title, desc, price) {
    //save course logic goes here
}
