import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../api/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  // Storing product list
  public productList:any;
  constructor(private api:ProductsService){}

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      //console.log(res);
      this.productList=res;
    })
  }
}
