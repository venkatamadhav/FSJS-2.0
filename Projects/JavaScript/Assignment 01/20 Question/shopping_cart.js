const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

console.log(`This is Initial Shopping Cart ${shoppingCart}`);

if (!shoppingCart.includes('Meat')) //Writing If condition as Question says to add Meat if Meat is not already present in the shopping cart. 
{
shoppingCart.unshift('Meat');
console.log(`This is after adding meat to Shopping Cart ${shoppingCart}`);
}

if (!shoppingCart.includes('Sugar')) 
{
shoppingCart.push('Sugar');
console.log(`This is after adding Sugar to Shopping Cart ${shoppingCart}`);
}

const honey = shoppingCart.indexOf("Honey");
shoppingCart.splice(honey, 1);
console.log(`This is after removing Honey from Shopping Cart ${shoppingCart}`);

const tea = shoppingCart.indexOf("Tea");
shoppingCart.splice(tea,1,"Green Tea");
console.log(`This is after changing Tea to Green Tea from Shopping Cart ${shoppingCart}`);
