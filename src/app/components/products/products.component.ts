import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../api/products.service';
import { CartService } from '../../api/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  // Storing product list
  public productList:any;
  posts: any[] = [];
  constructor(private api:ProductsService, private cart:CartService){}

  ngOnInit(): void {
    
    this.api.getProduct().subscribe(res=>{
      //console.log(res);
      this.productList=res;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    });
    
  }
  //add to cart
  addToCart(item:any){
    this.cart.addToCart(item);
    console.log(item);
  }
  likeProduct(item: any): void {
    item.likes++;
    this.api.updateProduct(item).subscribe();
  }

  // Function to handle dislike button click
  dislikeProduct(item: any): void {
    item.dislikes++;
    this.api.updateProduct(item).subscribe();
  }  
  
}
