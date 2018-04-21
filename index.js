var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice : Math.random() *100})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length < 1){
    return `Your shopping cart is empty.`
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    let i = 0;
    var firstItems = `In your cart, you have`;
    while(i < cart.length - 1){
      firstItems += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
      i++;
    }
    firstItems += ` and ${cart.slice(-1)[0].itemName} at $${cart.slice(-1)[0].itemPrice}.`;
    return firstItems;
  }
}

function total() {
  // write your code here
  var i = 0;
  var sum = 0;
  while (i < cart.length) {
    sum += cart[i].itemPrice;
    i++;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1);
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`;
  }
  cart = [];
  return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
}
