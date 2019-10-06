var shoppingCart = (function () {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];

  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    //sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    if (cartInitialized) {
      cart = JSON.parse(cartInitialized);
      //console.log(cart);
      //console.log('Getting from cartinitialized');
    }
    else {
      //cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
      cart = [];
      console.log('cart null');
    }
  }
  //if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  //}


  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};

  // Add to cart
  obj.addItemToCart = function (name, price, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart - Apply total discount here
  obj.totalCart = function () {
    let totalCart = 0;
    for (var item in cart) {
      totalCart += Number(this.getTotalPriceAfterDiscount(cart[item].name, cart[item].count, cart[item].price));
    }
    if (totalCart >= 150)
      totalCart -= 20;
    return totalCart;
  }

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = this.getTotalPriceAfterDiscount(item.name, item.count, item.price);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // Get discounted price
  obj.getTotalPriceAfterDiscount = function (item, count, price) {

    if (discounts) {
      //console.log('discounts found');
      //console.log(discounts);
      if (discounts[item]) {
        if (discounts[item].count <= count) {
          return Number((price * count) - discounts[item].discount).toFixed(2);
        }
        else {
          return Number(price * count).toFixed(2);
        }
      }
      else {
        return Number(price * count).toFixed(2);
      }
    }
    else {
      return Number(price * count).toFixed(2);
    }
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();