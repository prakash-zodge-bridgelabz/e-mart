import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // wallpapers = [
  //   'src/app/comoponents/home/wallpapers/Company landsca 0c25e895-1cc4-4753-a236-4c78e6fd0fc0.png',
  //   'src/app/comoponents/home/wallpapers/Company landsca 63ed3af1-63fb-4515-9b99-e9dc4fa9a2a0.png',
    
  //   // Add more wallpaper URLs as needed
  // ];
constructor(private router:Router){}
  navigateToProducts(category: string) {
    // Use Angular Router to navigate to the products page with the selected category
    this.router.navigate(['/products'], { queryParams: { category: category } });
  }
  
}
