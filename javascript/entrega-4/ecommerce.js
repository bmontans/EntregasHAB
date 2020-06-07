'use strict';

//////////////////////////////////////////////////////////////////////////////////////////
/// consegui crear una lista con los diferentes items y sus precios y pasar esta lista ///
/// a un cliente de manera privada, además de crear una función para añadir items      ///
/// de manera aleatoria, pero no conseguí solucionar el problema del todo              ///
//////////////////////////////////////////////////////////////////////////////////////////

const inventory = ['shirt', 'leggings', 'jacket', 'shoes', 'socks'];
const price = [23, 45, 70, 40, 10];

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  static createInventory(inventory, price) {
    return inventory.map((name, index) => {
      return new Item(name, price[index]);
    });
  }
}

class CartItem {
  units = 1;
  constructor(item) {
    this.item = item;
  }
  increase() {
    this.units++;
  }
}

class User {
  #cart = [];
  constructor(userName) {
    this.userName = userName;
  }
  newList(inventory, price) {
    this.#cart = Item.createInventory(inventory, price);
  }
  addToCart(item) {
    for (let i = 0; i < this.#cart.length; i++) {
      if (item.name === this.#cart.item.name) {
        return new CartItem.increase();
      }
    }
  }
  fillCart(ammount, catalogue) {
    for (let i = 0; i < ammount; i++) {
      const itemIndex = Math.floor(Math.random() * catalogue.length);
      this.addToCart(catalogue[itemIndex]);
      // this.#cart.push(new Item());
    }
  }
  pay(store) {
    store.checkout(this.#cart);
  }
}

class Shop {
  constructor(name) {
    this.name = name;
  }
  checkout(cart) {
    for (const cartItem of cart) {
      console.log(
        `Item: ${cartItem.item.name} Units: ${cart.ammount} Price: ${cartItem.item.price * cartItem.ammount}`
      );
    }
    const total = cart.reduce((accumulator, currentItem) => {
      // return (accumulator = currentItem.item);
    });
  }
}

const myItem = Item.createInventory(inventory, price);
console.log(myItem);
const myUser = new User('Pepito');
console.log(myUser, myUser.newList(inventory, price));
const myShop = new Shop('Mercadona');
// console.log(myUser.fillCart(), myUser.pay());
