import { Component, OnInit } from '@angular/core';
import { CartService } from '../../api/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  public products!:any[];
  public grandTotal:number = 0;
  constructor(private cart:CartService){

  }
  ngOnInit(): void {
    this.cart.getProduct().subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cart.getTotalPrice();
    })
  }
  // empty cart
  emptyCart(){
    this.cart.removeAllItemsFromCart();
  }

  //remove single item form cart
  removeItemFromCart(item:any){
    this.cart.removeCartItem(item);
  }
}
