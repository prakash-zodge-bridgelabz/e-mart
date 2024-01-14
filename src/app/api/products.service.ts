import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  // Get method
  getProduct(): Observable<any> {
    return this.http.get('http://localhost:3000/posts');
  }

  // Update method to update product in JSON server
  updateProduct(product: any): Observable<any> {
    const url = `http://localhost:3000/posts/${product.id}`;
    return this.http.put(url, product);
  }
}
