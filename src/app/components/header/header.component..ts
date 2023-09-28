import { Component,Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service' ;



@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
 
})


export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;
@Input()
get cart():Cart { return this._cart
}


constructor(private cartService: CartService) {}
getTotal(items: Array<CartItem>) :number

 {
  return this.cartService.getTotal(items);
} 

set cart(cart: Cart) {
  this._cart = cart;

  this.itemsQuantity = cart.items
  .map((item) => item.quantity)
  .reduce((prev, curent) => prev + curent, 0);
}
onClearCart(): void {
  this.cartService.clearCart();
}
}