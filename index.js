var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100);
 cart.push({ itemName: item, itemPrice: price});
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  for (var i = 0; i < cart.length; i++) {
    let arr = [];
    arr.push(`cart[i].itemName at cart[i].itemPrice`);
    return (`In your cart, you have ${arr.join(, )}`);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
