import { Component, OnInit } from '@angular/core';
import { CartService } from '../../api/cart.service';
import { LoginHeadersService } from '../../api/login-headers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  public totalItem = 0;
  constructor(private cart:CartService,private loginHeaders:LoginHeadersService){}
  // Use a method to retrieve the hidden state
  areButtonsHidden() {
    return this.loginHeaders.getButtonsHiddenState();
  }
  ngOnInit(): void {
    this.cart.getProduct().subscribe(res=>{
      this.totalItem=res.length;
    })
  }
}
