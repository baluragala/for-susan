function calculateDiscount(price: number, discountPercent: number): number {
    return (price * (discountPercent / 100));
}

let price: number = 150;
let discountPercent: number = 10;
let discountPriceValue: number = calculateDiscount(price, discountPercent);

console.log(discountPriceValue);

// default params
function calculateDiscount1(price: number, discountPercent: number = 10): number {
    return (price * (discountPercent / 100));
}

let price1: number = 100;
let discountPercent1: number = 20;
let discountPriceValue1: number = calculateDiscount1(price1);

console.log(discountPriceValue1);


// optional params
function calculateDiscount2(price: number,
                            discountPercent: number = 10,
                            staffDiscount?: number): number {
    if (staffDiscount) {
        return (price * ((discountPercent + staffDiscount) / 100));
    } else
        return (price * (discountPercent / 100));
}

let price2: number = 100;
let discountPercent2: number = 20;
let discountPriceValue2: number = calculateDiscount2(200, 13);

console.log(discountPriceValue2);


function saveCourse(title: string, desc: string, price: number): void {
    //save course logic goes here
}