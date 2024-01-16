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
searchText: any;
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
  public likedProducts: Set<number> = new Set<number>(); // Set to store liked product ids

  likeProduct(item: any): void {
    // Check if the product has already been liked
    if (!this.likedProducts.has(item.id)) {
      let likesCount = item.likes;
      likesCount++;
      item.likes++;
      this.api.updateProduct(item, likesCount, item.dislikes).subscribe();
      // Add the product id to the likedProducts set
      this.likedProducts.add(item.id);
    }
  }
  public dislikedProducts: Set<number> = new Set<number>();
  dislikeProduct(item: any): void {
    if(!this.dislikedProducts.has(item.id)){
      let dislikesCount=item.dislikes;
      item.dislikes++;
      dislikesCount++;
      this.api.updateProduct(item,item.likes,dislikesCount).subscribe();
      this.dislikedProducts.add(item.id);
    }
    
  }  
  
}
