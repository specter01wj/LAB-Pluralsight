// string, number, boolean, array, undefined, null, any
var firstName;
firstName = 'Dan';
var age;
age = 45;
var hasPurchased = true;
var productNames = [];
productNames.push('Basketball');
var petCount = [];
petCount.push(5);
console.log(firstName, age, hasPurchased, productNames, petCount);
var productType = 'sports'; // homeGoods, grocery ("magic string")
if (productType === 'sports') {
    console.log('Found sports product type.');
}
// Using Enums
var ProductType;
(function (ProductType) {
    ProductType[ProductType["Sports"] = 0] = "Sports";
    ProductType[ProductType["HomeGoods"] = 1] = "HomeGoods";
    ProductType[ProductType["Groceries"] = 2] = "Groceries";
})(ProductType || (ProductType = {}));
var pt = ProductType.Sports;
if (pt === ProductType.Sports) {
    console.log('Found sports product type.');
}
